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
        Axios(`https://api.cannabaze.com/UserPanel/Get-GetDeliveryStoresHomepage/`, {
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
            <div className="px-sm-0 px-3">
                <div >
                    {!Skeleton ? <React.Fragment>
                        <div className="">
                            <h1 className='section_main_title'>Delivery services</h1>
                            <h3 className='section_main_subtitle'>{state.Location}</h3>

                        </div>
                        <div className="col-12  my-4 recentViewProductSlider" id="width" ref={ref}>
                            <ScrollContainer className="ScrollContainerRelative">
                                {DeliveryService.map((items, index) => {
                                    return (
                                        <div className='deliveryServicesCard' key={index}>
                                            <div className='deliveryServicesBorder '>
                                                <Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g, '-').toLowerCase()}/${"menu"}/${items.id}`}>
                                                    <div className='col-12 deliveryServicesImage_container'>
                                                        <LazyLoadImage className='deliveryServicesImage' src={`https://api.cannabaze.com/${items.Store_Image}`} alt={items.Store_Name} />
                                                    </div>
                                                </Link>
                                                <div className='col-12 deliveryServicesContent_container px-4'>
                                                    <Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g, '-').toLowerCase()}/${"menu"}/${items.id}`}>
                                                        <div className='w-100  deliveryServicesTitle'>
                                                            <p className='ellipsis'>{items.Store_Name}</p>
                                                        </div>
                                                        <div className='w-100 deliveryServices_SubTitle'>
                                                            <p className='ellipsis'>{items.Store_Address}</p>
                                                        </div>
                                                    </Link>
                                                    <Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g, '-').toLowerCase()}/${"review"}/${items.id}`}>
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
