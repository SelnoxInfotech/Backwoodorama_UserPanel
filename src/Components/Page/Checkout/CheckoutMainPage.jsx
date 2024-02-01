import DeliveryOption from "./DeliveryOption"
import { DeliveryInformation } from "./DeliveryInformation"
import Payment from "./Payment"
import React from "react"
import AddToCartReview from "../Product/AddToCartComponent/AddToCartReview"
import AddToCartSummary from "../Product/AddToCartComponent/AddToCartSummary"
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from "axios"
const CheckOutMainPage = () => {
    
    const { state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const navigate = useNavigate()
    const token_data = cookies.get('User_Token_access')
    const [ShowData, SetShowData] = React.useState(false)
    const [ShowDeliveryInformation, SetShowDeliveryInformation] = React.useState(false)
    const [DeliveryOptionData, SetDeliveryOptionData] = React.useState([])
    const location = useLocation();
    const { InputValues, abc } = location?.state
    const [image, setImage] = React.useState()
    const [DefalutImage , SetDefalutimage  ] =  React.useState(false)
    const [Dataimage, setDataImage] = React.useState()
    const [Time, SetTime] = React.useState('');
    const [Details, SetDetails] = React.useState({
        FirstName: '',
        LastName: "",
        DateOfBirth: "",
        MobileNo: "",
        MedicalMarijuanaNumber: "",
        Address: "",
        Email:"",
        Ordertype:'',
    })
    const [CheckOut_Loading, SetLoading] = React.useState(false)
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [ShowData, ShowDeliveryInformation, DeliveryOptionData])
    const config = {
        headers: { Authorization: `Bearer ${token_data}` }
    };
    async function SubmitData() {

     if(image !== undefined) {
        let asdsd = 'Delivery'

        if(state.selectDeliveryoptions === "pickup_btn"){
            asdsd ="Pickup"
        }
        else if(state.selectDeliveryoptions === "CurbsidePickup"){
            asdsd = 'Delivery and Pickup'
        }else if(state.selectDeliveryoptions === "delivery_btn"){
            asdsd ='Delivery'
        }


        const formdata = new FormData();
        formdata.append('IdCard', Dataimage);
        formdata.append('FirstName', Details.FirstName);
        formdata.append('LastName', Details.LastName);
        formdata.append('DateOfBirth', Details.DateOfBirth);
        formdata.append('MobileNo', Details.MobileNo);
        formdata.append('MedicalMarijuanaNumber', Details.MedicalMarijuanaNumber);
        formdata.append('subtotal', state?.Cart_subTotal);
        formdata.append('Product', JSON.stringify(state.AllProduct));
        formdata.append('Store', state.AllProduct[0]?.Store_id);
        formdata.append('Address', state.selectDeliveryoptions === "pickup_btn" ? state.AllProduct[0]?.StoreAddress : state.DeliveryAddress);
        formdata.append('DeliveryTime', Time);
        formdata.append('Email', Details.Email)
        formdata.append('Order_Type', asdsd)

        await Axios.post(
            'https://api.cannabaze.com/UserPanel/Add-Order/ ',
            formdata,
            config,

            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            },
            SetLoading(true)
        ).then(response => {
            SetLoading(false)
            let datanew = {orterbtn : location.state.orderBtn  , ...response.data.data } 
            navigate("/order-placed" , {state: datanew})
            dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
        }).catch(
            function (error) {
                SetLoading(false)
        })
        // Axios.post(`https://api.cannabaze.com/UserPanel/Add-UserProfileOrderDetails/`, formdata, config).then((data) => {
            
        // })

     }
     else(
        SetDefalutimage(true)
     )

    }
    console.log(state.selectDeliveryoptions ,'state')
    React.useEffect(() => {
      state.login &&   Axios.get(`https://api.cannabaze.com/UserPanel/Get-UserProfileOrderDetails/`, config).then((data) => {
        if (data.data.length !== 0) {
            data.data.map((user, key) => {
             
                    SetDetails({ 
                        ...Details, MobileNo:user.MobileNo, Email:user.Email, "DateOfBirth": user.DateOfBirth ,  "FirstName": user.FirstName , "LastName": user.LastName , "MedicalMarijuanaNumber": user.MedicalMarijuanaNumber,  "MobileNo": user.MobileNo
                    });
              
            })


        }

    })

    }, [])
    return (
        <React.Fragment>
            <div className="container">


                <div className="row center">
                    <div className="col-md-8 col-lg-6 col-sm-12 col-12">
                        <div className="row ">
                            <div className="col-lg-12">
                                <DeliveryOption Time={Time} SetTime={SetTime} Hours={state?.AllProduct[0]?.StoreHours} DeliveryOptionData={DeliveryOptionData} address={InputValues.delivery} SetShowData={SetShowData} />

                            </div>

                        </div>
                        <div className="row ">
                            <div className="col-lg-12">
                                {ShowData === true && <DeliveryInformation SetShowDeliveryInformation={SetShowDeliveryInformation}
                                    image={image}
                                    DefalutImage={DefalutImage}
                                    SetDefalutimage={SetDefalutimage}
                                    setImage={setImage}
                                    Dataimage={Dataimage}
                                    setDataImage={setDataImage}
                                    Details={Details}
                                    SetDetails={SetDetails}

                                />}
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {ShowDeliveryInformation === true && <Payment SetShowPlaceOrder={SetShowDeliveryInformation} />}
                            </div>

                        </div>

                        <div className="row m-2">
                            <div className="col-lg-12 mx-auto checkout_main_page_addtocart_review fontStyle font_size_paragraph">
                                <p>Review</p>
                                <AddToCartReview />
                            </div>

                        </div>

                    </div>
                    <div className="col-md-8 col-lg-5 col-sm-12 col-12">
                        <div className="row checkout_main_page_addtocart_margin">
                            <div className="col-lg-12  checkout_main_page_summary">
                                <AddToCartSummary SetDeliveryOptionData={SetDeliveryOptionData} Total={abc} SubmitData={SubmitData}
                                    CheckOut_Loading={CheckOut_Loading}
                                    SetLoading={SetLoading}
                                    Details={Details}
                                    SetDetails={SetDetails}
                                />

                            </div>

                        </div>
                    </div>

                </div>




            </div>
        </React.Fragment>
    )
}
export default CheckOutMainPage