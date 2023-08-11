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
import { es } from 'date-fns/locale';
const DeliveryServices = () => {
    const [DeliveryService, SetDeliveryService] = useState({})
    const [Arrry, SetArry] = useState([])
    const [da, Setda] = React.useState([])
    const { state } = React.useContext(Createcontext)
    const classes = useStyles()
    const [Skeleton, SetSkeleton] = React.useState(true)
    const ref = React.useRef(null);
    const l = []
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
        <>
            <div className="container-fluid mt-5">
                <div className="row mt-3">
                    {!Skeleton ? <React.Fragment>

                        <div className="col-12  px-0">
                            <h2 className='deliveryServicesHEadingPadding delivery_services_heading'>Delivery services</h2>

                        </div>
                        <div className="col-12 delivery_services_subheading px-0">
                            <h3 className='deliveryServicesHEadingPadding'>{state.Location}</h3>

                        </div>
                        <div className="col-12  mt-2 recentViewProductSlider" id="width" ref={ref}>
                            <ScrollContainer className="DeliveryServices_ScrollContainerRelative">
                                {DeliveryService.map((items, index) => {
                                    return (
                                        <div className='dispensoriesContainer col-12 col-sm-6   deliveryServicesEachCardOn_lg_Device' key={index}>
                                            <div className='deliveryServicesBorder '>
                                                <Link to={`/DispensoriesProduct/${items.id}/${"Menu"}`}>
                                                    <div className='col-12 deliveryServicesImage_container'>
                                                        <LazyLoadImage className='deliveryServicesImage' src={`https://sweede.app/${items.Store_Image}`} alt='image not available' />
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

                    </React.Fragment> : <DeliverServiceSkeleton></DeliverServiceSkeleton>

                    }
                </div>

            </div>
        </>
    )
}
export default DeliveryServices
