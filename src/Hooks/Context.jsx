import React, { useReducer, createContext } from 'react';
import Reducer from '../Hooks/Reduser'
import Cookies from 'universal-cookie';
import axios from 'axios';
import CurrentLocation from '../Components/Component/Navbar/Component/CurrentLocation';
import CheckAgeEligbilityPopup from '../Components/Page/CheckAgeEligblityPopup/CheckAgeEligbilityPopup';
const Createcontext = createContext();
const cookies = new Cookies();
const login = cookies.get("Token_access")
const log = login ? true : false

const initialUser = {

    login: log,
    ApiProduct: false,
    AllProduct: [],
    DeliveryOption: false,
    DeliveryInformation: false,
    Cart_subTotal: "",
    LoadingApi: false,
    Order_place: false,
    Dispensories: [],
    Location: "",
    LocationData:[]

}

function Context(props) {
    const [state, dispatch] = useReducer(Reducer, initialUser)
    const cookies = new Cookies();
    const [CheckAge , SetCheckAge] =React.useState(true)
    React.useEffect(() => {
        SetCheckAge(cookies.get("CheckAge"))
        console.log(cookies.get("CheckAge"))
        const logi = cookies.get("Token_access")
        dispatch({ type: 'LoadingApi', LoadingApi: true })
        if (Boolean(logi)) {
            axios.get("https://sweede.app/UserPanel/Get-Addtocart/", {
                headers: { Authorization: `Bearer ${logi}` }
            }).then(async function (response) {
                const CarTProduct = await response?.data;
                dispatch({ type: 'AllProduct', AllProduct: CarTProduct })
                dispatch({ type: 'LoadingApi', LoadingApi: false })
                let AllTotal = 0
                CarTProduct.map((data) => {
                    return AllTotal += parseInt(data?.TotalPrice)
                })
                dispatch({ type: 'Cart_subTotal', Cart_subTotal: AllTotal })
            })
                .catch(function (error) {
                    return error
                })
        }
        else {
            const data = localStorage?.getItem("items")
            const length = data === null ? [] : JSON.parse(data)

            if (data === null) {
                dispatch({ type: 'AllProduct', AllProduct: [] })
            }
            else if (data.length === 0) {
                dispatch({ type: 'AllProduct', AllProduct: [] })
            }
            else {
                const data = localStorage?.getItem("items")
                dispatch({ type: 'AllProduct', AllProduct: length })
                let AllTotal = 0
                JSON.parse(data)?.map((data) => {

                    return AllTotal += parseInt(data.Price.SalePrice * data.Cart_Quantity);
                })
                dispatch({ type: 'LoadingApi', LoadingApi: false })
                dispatch({ type: 'Cart_subTotal', Cart_subTotal: AllTotal })
            }
        }
    }, [state.ApiProduct])





    return (

        <Createcontext.Provider value={{ state, dispatch }} container>
           <CurrentLocation></CurrentLocation>
           <CheckAgeEligbilityPopup value={cookies.get("CheckAge") === undefined ? true :false} ></CheckAgeEligbilityPopup>
            {props.children}
        </Createcontext.Provider>

    )

}

export default Createcontext;
export { Context }