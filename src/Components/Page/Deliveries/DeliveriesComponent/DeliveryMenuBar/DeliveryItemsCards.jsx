import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from '../../../../../Style';
import { MdShoppingCart } from "react-icons/md"
import { GiFlowerPot } from "react-icons/gi"
import { GiChocolateBar } from "react-icons/gi"
import { GiSpotedFlower } from "react-icons/gi"
import { FaPencilRuler } from "react-icons/fa"
import { GiClothJar } from "react-icons/gi"
import { Link } from 'react-router-dom';
const DeliveryItemsCard = ({ Deliverie }) => {
    const classes = useStyles()
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {Deliverie?.map((items, index) => {
                        return (
                            <div className="col-xl-8 col-lg-10  col-12 delivery_items_cards_container mt-4" key={index}>
                                <div className='row p-2'>
                                    <div className='col-sm-8 col-12 delivery_image_content_Container_height'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-5 delivery_items_card_img_container px-0'>
                                               <Link to={`/DispensoriesProduct/${items.id}/${"Menu"}`}> 
                                               <LazyLoadImage className='delivery_card_image_height' src={`http://backend.sweede.net/${items.Store_Image}`} alt='Image_not found' height={"100px"} />
                                               </Link>
                                            </div>
                                            <div className='col-lg-7 col-7'>
                                                <div className='row'>
                                                    <div className='col-12 DeliveryItem_heading deliver_items_content_same_height'>
                                                        <h1 className='ellipsis'>{items.Store_Name}</h1>
                                                    </div>
                                                    <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                        <span><AiFillStar /></span><p className='delivery_items_spanss'>5.0(27)</p>

                                                    </div>
                                                    <div className='col-12 delivery_item_paragraph deliver_items_content_same_height'>
                                                        <p className='ellipsis'>{items.Store_Address}</p>
                                                    </div>
                                                    <div className='col-12 delivery_item_paragraph deliver_items_content_same_height '>
                                                        <p className='ellipsis'>{items.address2}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-4 col-12 delivery_items_right_side_container_height'>
                                        <div className='row'>

                                            <div className='col-12 DeliveryItem_heading  total_items deliver_items_content_same_height'>
                                                <h1 className='ellipsis'>{items.total_items} Items</h1>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span className='delivery_items_icons'><GiFlowerPot /></span><p>Concentrate {items.Number_of_items_type1} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span className='delivery_items_icons'><GiChocolateBar /></span><p>Edible {items.Number_of_items_type2} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span className='delivery_items_icons'><GiSpotedFlower /></span><p>flower {items.Number_of_items_type3} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span className='delivery_items_icons'><FaPencilRuler /></span><p>Vape pens {items.Number_of_items_type4} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span className='delivery_items_icons'><GiClothJar /></span><p>others {items.Number_of_items_type5} items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row p-2'>

                                    <div className='col-xl-8 col-lg-10 col-md-12 delivery_items_button_div bg-light'>
                                        <div className='row'>
                                            <div className='col-lg-7 delivery_item_paragraphBtn delivery_btn_delivery delivery_items_card_flex'>
                                                <span><MdShoppingCart /></span> <p>30 to 90 min |<span>Free delivery</span>|<span>$50 min</span></p>
                                            </div>
                                            <div className='col-lg-5 delivery_btn_div'>
                                                <Box
                                                    className={`${classes.loadingBtnTextAndBack}`}
                                                >
                                                    <Link to={`/DispensoriesProduct/${items.id}/${"Menu"}`}><LoadingButton style={{ width: "100%", height: "30px" }} variant="outlined">view menu</LoadingButton></Link>

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
        </>
    )
}
export default DeliveryItemsCard