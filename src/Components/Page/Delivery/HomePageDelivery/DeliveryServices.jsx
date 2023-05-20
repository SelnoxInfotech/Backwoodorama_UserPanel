import * as React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Rating } from '@mui/material';
import useStyles from '../../../../Style';
const DeliveryServices = () => {
    const classes = useStyles()
    const DeliveryServicesArray = [
        { imgUrl: "/image/logo.webp", heading: "Vireio Queen Delivery", address: "Queen-North |4mi" },
        { imgUrl: "/image/weed.png", heading: "Vireio Queen Delivery", address: "Queen-North |4mi" },
        { imgUrl: "/image/logo.webp", heading: "Vireio Queen Delivery", address: "Queen-North |4mi" },
        { imgUrl: "/image/logo.webp", heading: "Vireio Queen Delivery", address: "Queen-North |4mi" },
        { imgUrl: "/image/weed.png", heading: "Vireio Queen Delivery", address: "Queen-North |4mi" },
        { imgUrl: "/image/logo.webp", heading: "Vireio Queen Delivery", address: "Queen-North |4mi" },

    ]
    const ref = React.useRef(null);

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-12 delivery_services_heading">
                        <h1>Delivery Services</h1>

                    </div>
                    <div className="col-12 mt-2 delivery_services_subheading">
                        <h2>Vireio Delivery-Queen North</h2>

                    </div>
                    <div className="col-12   recentViewProductSlider" id="width" ref={ref}>
                        <ScrollContainer className="ScrollContainerRelative">
                            {DeliveryServicesArray.map((items, index) => {
                                return (
                                    <div className='dispensoriesContainer col-12  col-sm-6 col-md-6 col-lg-4 col-xl-3' key={index}>
                                        <div className=' deliveryServicesBorder mx-1'>
                                            <div className='col-12 deliveryServicesImage_container'>
                                                <LazyLoadImage className='deliveryServicesImage' src={items.imgUrl} alt='image not available' />
                                            </div>
                                            <div className='col-12 deliveryServicesContent_container px-4'>
                                                <div className='w-100  deliveryServicesTitle'>
                                                    <p className='ellipsis'>{items.heading}</p>

                                                </div>
                                                <div className='w-100 deliveryServices_SubTitle'>
                                                    <p className='ellipsis'>{items.address}</p>
                                                </div>
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