import React, { useReducer, createContext } from 'react';
import Reducer from '../Hooks/Reduser'
import Cookies from 'universal-cookie';
import axios from 'axios';
import CurrentLocation from '../Components/Component/Navbar/Component/CurrentLocation';
import CheckAgeEligbilityPopup from '../Components/Page/CheckAgeEligblityPopup/CheckAgeEligbilityPopup';
import CookiesAccept from '../Components/Component/CookiesAccept/CookiesAccept';
import { WishListget } from '../Components/Component/Whishlist/WishListApi_';
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
    DefalutLocation:"",
    Location: "",
    LocationData: [],
    cookies: 1,
    CookiesMarketing: 1,
    CookiesAnalytical: 1,
    DeliveryAddress: "",
    selectDeliveryoptions: "",
    Profile: [],
    WishList: [],
    Country:"",
    State:"",
    City:""
}

function Context(props) {
    const [state, dispatch] = useReducer(Reducer, initialUser)
    
    React.useEffect(() => {
        const cookies = new Cookies();
        const logi = cookies.get("Token_access")
        console.log(cookies.get("Location"))
        let date = new Date();
        date.setTime(date.getTime() + (60 * 60 * 8000))
        if (!cookies.get('CookiesAcceptAll')) {
            cookies.set('CookiesAcceptAll', 0, { expires: date })
        }
        if (!cookies.get('Marketing')) {
            cookies.set('Marketing', 0, { expires: date })
        }
        if (!cookies.get('Analytical')) {
            cookies.set('Analytical', 0, { expires: date })
        }
        dispatch({ type: 'Cookies', Cookies: cookies.get("CookiesAcceptAll") })
        dispatch({ type: 'CookiesMarketing', CookiesMarketing: cookies.get("Marketing") })
        dispatch({ type: 'CookiesAnalytical', CookiesAnalytical: cookies.get("Analytical") })
        dispatch({ type: 'DefalutLocation', DefalutLocation: cookies.get("Location") })
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
            axios.get(`https://sweede.app/UserPanel/Get-GetUserProfile/`,
                { headers: { Authorization: `Bearer ${logi}` } }
            )
                .then((res) => {

                    dispatch({ type: 'Profile', Profile: res.data })
                })
                .catch((error) => {
                    console.error(error)
                })
            WishListget().then((res) => {
                let object = {};
                res.data.map((data) => {
                    const l = data.id
                    object[l] = true
                    return data

                })
                dispatch({ type: 'WishList', WishList: object })


            }).catch((err) => { });




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



    }, [state.ApiProduct,state.login])
    return (

        <Createcontext.Provider value={{ state, dispatch }} container>
            <CheckAgeEligbilityPopup value={cookies.get("CheckAge") === undefined ? true : false} ></CheckAgeEligbilityPopup>
            {
                parseInt(state.Cookies) === 0 && <CookiesAccept></CookiesAccept>
            }


            {props.children}
        </Createcontext.Provider>

    )

}

export default Createcontext;
export { Context }