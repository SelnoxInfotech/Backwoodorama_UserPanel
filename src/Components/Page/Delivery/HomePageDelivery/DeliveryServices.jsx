import * as React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Rating } from '@mui/material';
import useStyles from '../../../../Style';
import Axios from "axios"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Createcontext from "../../../../Hooks/Context"
import DeliverServiceSkeleton from '../../../Component/Skeleton/DeliveryServicesSkeleton';
import axios from 'axios';

const DeliveryServices = () => {
    const [DeliveryService, SetDeliveryService] = useState([])

    const { state } = React.useContext(Createcontext)
    const classes = useStyles()
    const [Skeleton, SetSkeleton] = React.useState(true)
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (state.City !== "") {
            var object = { City: state.City.replace(/-/g, " ") }
            Delivery(object).then((res) => {
                //   console.log(res.length === 0)
                if (res.length === 0) {
                    SetDeliveryService([])

                    object = { State: state.State.replace(/-/g, " ") }
                    Delivery(object).then((res) => {
                        if (res.length === 0) {
                            SetDeliveryService([])

                            object = { Country: state.Country.replace(/-/g, " ") }
                            Delivery(object).then((res) => {
                                if (res.length === 0) {

                                    SetDeliveryService([])
                                }
                                else{
                                    SetSkeleton(false)
                                    SetDeliveryService(res)
                                }
                            })
                        }
                        else {
                            SetSkeleton(false)
                            SetDeliveryService(res)
                        }

                    })
                }
                else {
                    SetSkeleton(false)
                    SetDeliveryService(res)
                }
            })
        }
        else {
            if (state.State !== "") {
                const object = { State: state.State.replace(/-/g, " ") }
                Delivery(object).then((res)=>{
                    if(res.length !== 0){
                        SetSkeleton(false)
                    SetDeliveryService(res)
                    }
                    else{
                        const object = { Country: state.Country.replace(/-/g, " ") }
                        Delivery(object).then(()=>{
                            if(res.length !== 0){
                                SetSkeleton(false)
                                SetDeliveryService(res)
                            }
                        })
                    }
                })
            }
            else {
                if (state.Country !== "") {
                    const object = { Country: state.Country.replace(/-/g, " ") }
                    Delivery(object).then((res)=>{
                        SetSkeleton(false)
                        SetDeliveryService(res)
                    })
                }
            }
        }
        function Delivery(object) {
            return (
                axios.post(`https://api.cannabaze.com/UserPanel/Get-GetDeliveryStoresHomepage/`,
                    object
                ).then((response) => {
                    if(response.data.length !==0)
                    {

                        return response.data
                    }
                    else{
                        SetSkeleton(false)
                        SetDeliveryService([])
                        return []
                    }
                
                    //    SetDeliveryService(response.data)
                    //    console.log(response.data)
                }

                ).catch(() => {

                       SetDeliveryService([])
                })
            )
        }
    }, [state])
    
    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }




    return (
        <React.Fragment>
            <div className="px-sm-0 px-3">
                <div >
                    {!Skeleton ? <React.Fragment>
                        <div className="">
                            <h1 className='section_main_title'>Delivery services</h1>
                            <h3 className='section_main_subtitle'>{state.Location}</h3>

                        </div>
                        <div className="col-12  my-4 recentViewProductSlider" id="width" ref={ref}>
                            <ScrollContainer className="ScrollContainerRelative">
                                {DeliveryService?.map((items, index) => {
                                    return (
                                        <div className='deliveryServicesCard' key={index}>
                                            <div className='deliveryServicesBorder '>
                                                <Link to={`/weed-deliveries/${modifystr(items.Store_Name)}/${items.id}`}>
                                                    <div className='col-12 deliveryServicesImage_container'>
                                                        <LazyLoadImage className='deliveryServicesImage' src={`${items.Store_Image}`} alt={items.Store_Name} />
                                                    </div>
                                                </Link>
                                                <div className='col-12 deliveryServicesContent_container px-4'>
                                                    <Link to={`/weed-deliveries/${modifystr(items.Store_Name)}/${items.id}`}>
                                                        <div className='w-100  deliveryServicesTitle'>
                                                            <p className='ellipsis'>{items.Store_Name}</p>
                                                        </div>
                                                        <div className='w-100 deliveryServices_SubTitle'>
                                                            <p className='ellipsis'>{items.Store_Address}</p>
                                                        </div>
                                                    </Link>
                                                    <Link to={`/weed-deliveries/${modifystr(items.Store_Name)}/${"review"}/${items.id}`}>
                                                        <div className='w-100 d-flex align-items-center'>
                                                            <span className='DeliveryServicesRatingTitle'>Rating</span>
                                                            <Rating className={`mx-2 ${classes.homePageStarIcons}`} color='green' name="read-only" value={items.rating === null ? 0 : items.rating} readOnly />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </ScrollContainer>
                        </div>
                    </React.Fragment> : <DeliverServiceSkeleton></DeliverServiceSkeleton>
                    }
                </div>

            </div>
        </React.Fragment>
    )
}
export default DeliveryServices
