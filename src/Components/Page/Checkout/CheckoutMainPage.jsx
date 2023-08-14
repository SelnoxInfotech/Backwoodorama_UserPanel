import DeliveryOption from "./DeliveryOption"
import DeliveryInformation from "./DeliveryInformation"
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
    const token_data = cookies.get('Token_access')
    const [ShowData, SetShowData] = React.useState(false)
    const [ShowDeliveryInformation, SetShowDeliveryInformation] = React.useState(false)
    const [DeliveryOptionData, SetDeliveryOptionData] = React.useState([])
    const location = useLocation();
    const { InputValues, abc } = location?.state
    const [image, setImage] = React.useState()
    const [Dataimage, setDataImage] = React.useState()
    const [Details, SetDetails] = React.useState({})
    const [CheckOut_Loading, SetLoading] = React.useState(false)
    
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [ShowData,ShowDeliveryInformation,DeliveryOptionData])

         console.log(state , Details)

    async function SubmitData() {
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
        const formdata = new FormData();
        formdata.append('IdCard', Dataimage);
        formdata.append('FirstName', Details.FirstName);
        formdata.append('LastName', Details.LastName);
        formdata.append('DateOfBirth', Details.Birthdate);
        formdata.append('MobileNo', Details.Mobile);
        formdata.append('MedicalMarijuanaNumber', Details.Id_Number);
        formdata.append('subtotal', state?.Cart_subTotal);
        formdata.append('Product', JSON.stringify(state.AllProduct));
        formdata.append('Store', state.AllProduct[0]?.Store_id);
        formdata.append('Address', state.DeliveryAddress);
        await Axios.post(
            'https://sweede.app/UserPanel/Add-Order/ ',
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
            navigate("/PlaceOrder")
            dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
        }).catch(
            function (error) {
                SetLoading(false)
            })

    }
    return (
        <>
            <div className="container">


                <div className="row center">
                    <div className="col-md-8 col-lg-6 col-sm-12 col-12">
                        <div className="row ">
                            <div className="col-lg-12">
                                <DeliveryOption DeliveryOptionData={DeliveryOptionData} address={InputValues.delivery} SetShowData={SetShowData} />

                            </div>

                        </div>
                        <div className="row ">
                            <div className="col-lg-12">
                                {ShowData === true && <DeliveryInformation SetShowDeliveryInformation={SetShowDeliveryInformation}
                                    image={image}
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
                                />

                            </div>

                        </div>
                    </div>

                </div>




            </div>
        </>
    )
}
export default CheckOutMainPage