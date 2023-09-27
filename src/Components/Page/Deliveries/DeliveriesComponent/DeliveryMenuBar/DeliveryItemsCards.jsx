import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from '../../../../../Style';
import { MdShoppingCart } from "react-icons/md"
import { GiFlowerPot } from "react-icons/gi"
import { Link } from 'react-router-dom';
const DeliveryItemsCard = ({ Deliverie }) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {Deliverie?.map((items, index) => {
                        return (
                            <div className="col-xl-8 col-lg-10  col-12 delivery_items_cards_container mt-4" key={index}>
                                <div className='row p-2'>
                                    <div className='col-sm-8 col-12 delivery_image_content_Container_height'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-5 delivery_items_card_img_container px-0'>
                                                <Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g,'-').toLowerCase()}/${items.id}`}>
                                                    <LazyLoadImage className='delivery_card_image_height' src={`https://api.cannabaze.com/${items.Store_Image}`} alt='Image_not found' height={"100px"} />
                                                </Link>
                                            </div>
                                            <div className='col-lg-7 col-7'>
                                                <div className='row'>
                                                    <div className='col-12  deliver_items_content_same_height'>
                                                        <h2 className='ellipsis DeliveryItem_heading'>{items.Store_Name}</h2>
                                                    </div>
                                                    <div className='col-12  delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                        <AiFillStar color='#31B665'/><p className='delivery_item_paragraph delivery_items_spanss'>5.0(27)</p>

                                                    </div>
                                                    <div className='col-12  deliver_items_content_same_height'>
                                                        <p className='ellipsis delivery_item_paragraph'>{items.Store_Address}</p>
                                                    </div>
                                                    <div className='col-12  deliver_items_content_same_height '>
                                                        <p className='ellipsis delivery_item_paragraph'>{items.address2}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-4 col-12 delivery_items_right_side_container_height'>
                                        <div className='row'>

                                            <div className='col-12   total_items deliver_items_content_same_height'>
                                                <h2 className='ellipsis DeliveryItem_heading'>{items.total_items} Items</h2>
                                            </div>
                                            {
                                                items?.Category?.map((data, index) => {
                                                    return (
                                                        <React.Fragment key={index}>

                                                        <div className='col-12  delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                            <span className='delivery_items_icons'><GiFlowerPot /></span><p className='delivery_item_paragraph'>{Object.keys(data)} ({Object.values(data)})</p>
                                                        </div>
                                                        </React.Fragment>
                                                    )
                                                })

                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className='row p-2'>

                                    <div className='col-xl-8 col-lg-10 col-md-12 delivery_items_button_div bg-light'>
                                        <div className='row'>
                                            <div className='col-lg-7 delivery_item_paragraphBtn delivery_btn_delivery delivery_items_card_flex center'>
                                                <div className='deliverItemCard_icons'>
                                                    <MdShoppingCart color='#707070' size={16} /><span>30 to 90 min |</span><span>Free delivery</span>|<span>$50 min</span>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 delivery_btn_div'>
                                                <Box
                                                    className={`${classes.loadingBtnTextAndBack}`}
                                                >
                                                    <Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g,'-')}/${"Menu"}/${items.id}`}><LoadingButton style={{ width: "100%", height: "30px" }} variant="outlined">view menu</LoadingButton></Link>

                                                </Box>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </React.Fragment>
    )
}
export default DeliveryItemsCard