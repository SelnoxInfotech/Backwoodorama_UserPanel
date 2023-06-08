import * as React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Rating } from '@mui/material';
import useStyles from '../../../../Style';
import Axios from "axios"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Createcontext from "../../../../Hooks/Context"
const 
DeliveryServices = () => {
    const [DeliveryService, SetDeliveryService] = useState([])
    const { state } = React.useContext(Createcontext)
    const classes = useStyles()
    const ref = React.useRef(null);
    React.useEffect(() => {
        Axios(`https://backend.sweede.net/UserPanel/Get-DeliveryStores/`, {

        }

        ).then((response) => {
            SetDeliveryService(response.data)
        }

        ).catch(() => {

        })
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-12 delivery_services_heading">
                        <h1>Delivery services</h1>

                    </div>
                    <div className="col-12 mt-2 delivery_services_subheading">
                        <h2>{state.Location}</h2>

                    </div>
                    <div className="col-12   recentViewProductSlider" id="width" ref={ref}>
                        <ScrollContainer className="ScrollContainerRelative">
                            {DeliveryService.map((items, index) => {
                                return (
                                    <div className='dispensoriesContainer col-12  col-sm-6 col-md-6 col-lg-4 col-xl-3' key={index}>
                                        <div className=' deliveryServicesBorder mx-3'>
                                            <Link to={`/DispensoriesProduct/${items.id}/${"Menu"}`}>
                                                <div className='col-12 deliveryServicesImage_container'>
                                                    <LazyLoadImage className='deliveryServicesImage' src={`https://backend.sweede.net/${items.Store_Image}`} alt='image not available' />
                                                </div>
                                            </Link>
                                            <div className='col-12 deliveryServicesContent_container px-4'>
                                                <Link to={`/DispensoriesProduct/${items.id}/${"Menu"}`}>
                                                    <div className='w-100  deliveryServicesTitle'>
                                                        <p className='ellipsis'>{items.Store_Name}</p>

                                                    </div>
                                                    <div className='w-100 deliveryServices_SubTitle'>
                                                        <p className='ellipsis'>{items.Store_Address}</p>
                                                    </div>
                                                </Link>
                                                <div className='w-100 d-flex align-items-center'>
                                                    <span>Rating</span>
                                                    <Rating className={`mx-2 ${classes.homePageStarIcons}`} color='green' name="read-only" value={4} readOnly />


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </ScrollContainer>
                    </div>

                </div>

            </div>
        </>
    )
}
export default DeliveryServices