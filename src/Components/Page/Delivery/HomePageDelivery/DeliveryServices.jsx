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

const DeliveryServices = () => {
    const [DeliveryService, SetDeliveryService] = useState({})

    const { state } = React.useContext(Createcontext)
    const classes = useStyles()
    const [Skeleton, SetSkeleton] = React.useState(true)
    const ref = React.useRef(null);
    React.useEffect(() => {
        Axios(`https://sweede.app/UserPanel/Get-GetDeliveryStoresHomepage/`, {
        }
        ).then((response) => {
            SetDeliveryService(response.data)
            SetSkeleton(false) 
        }

        ).catch(() => {

        })
    }, [])

    return (
        <React.Fragment>
            <div className="container-fluid mt-5">
                <div >
                    {!Skeleton ? <React.Fragment> 
                        <div className="">
                        <h2 className='section_main_title'>Delivery services</h2>
                        <h3 className='section_main_subtitle'>{state.Location}</h3>

                        </div>
                        <div className="col-12  my-4 recentViewProductSlider" id="width" ref={ref}>
                            <ScrollContainer className="DeliveryServices_ScrollContainerRelative">
                                {DeliveryService.map((items, index) => {
                                    return (
                                        <div className='deliveryServicesCard' key={index}>
                                            <div className='deliveryServicesBorder '>
                                                <Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g,'-')}/${"menu"}/${items.id}`}>
                                                    <div className='col-12 deliveryServicesImage_container'>
                                                        <LazyLoadImage className='deliveryServicesImage' src={`https://sweede.app/${items.Store_Image}`} alt='image not available' />
                                                    </div>
                                                </Link>
                                                <div className='col-12 deliveryServicesContent_container px-4'>
                                                    <Link to={`/Weed-deliveries/${items.Store_Name.replace(/\s/g,'-')}/${"menu"}/${items.id}`}>
                                                        <div className='w-100  deliveryServicesTitle'>
                                                            <p className='ellipsis'>{items.Store_Name}</p>
                                                        </div>
                                                        <div className='w-100 deliveryServices_SubTitle'>
                                                            <p className='ellipsis'>{items.Store_Address}</p>
                                                        </div>
                                                    </Link>
                                                    <div className='w-100 d-flex align-items-center'>
                                                        <span className='DeliveryServicesRatingTitle'>Rating</span>
                                                        <Rating className={`mx-2 ${classes.homePageStarIcons}`} color='green' name="read-only" value={4} readOnly />


                                                    </div>
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
