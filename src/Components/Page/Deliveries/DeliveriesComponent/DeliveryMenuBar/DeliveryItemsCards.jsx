import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from '../../../../../Style';
import {MdShoppingCart} from "react-icons/md"
const DeliveryItemsCard = ({DeliveryItemsCardArray}) => {
    const classes = useStyles()
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {DeliveryItemsCardArray.map((items, index) => {
                        return (
                            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12 delivery_items_cards_container mt-4" key={index}>
                                <div className='row p-2'>
                                    <div className='col-sm-8 col-12 delivery_image_content_Container_height'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-5 delivery_items_card_img_container px-0'>
                                                <LazyLoadImage className='delivery_card_image_height' src={items.imgurl} alt='Image_not found' height={"100px"} />

                                            </div>
                                            <div className='col-lg-7 col-7'>
                                                <div className='row'>
                                                <div className='col-12 DeliveryItem_heading deliver_items_content_same_height ellipsis'>
                                                    <h1>{items.item_name}</h1>
                                                </div>
                                                <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                    <span><AiFillStar /></span><p className='delivery_items_spanss'>5.0(27)</p>

                                                </div>
                                                <div className='col-12 delivery_item_paragraph deliver_items_content_same_height ellipsis'>
                                                    <p>{items.address}</p>
                                                </div>
                                                <div className='col-12 delivery_item_paragraph deliver_items_content_same_height ellipsis'>
                                                    <p>{items.address2}</p>
                                                </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-4 col-12 delivery_items_right_side_container_height'>
                                        <div className='row'>

                                            <div className='col-12 delivery_item_paragraph total_items deliver_items_content_same_height'>
                                                <p>{items.total_items} Items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span><AiFillStar /></span><p>Concentrate {items.Number_of_items_type1} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span><AiFillStar /></span><p>Edible {items.Number_of_items_type2} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span><AiFillStar /></span><p>flower {items.Number_of_items_type3} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span><AiFillStar /></span><p>Vape pens {items.Number_of_items_type4} items</p>
                                            </div>
                                            <div className='col-12 delivery_item_paragraph delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                <span><AiFillStar /></span><p>others {items.Number_of_items_type5} items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row p-2'>

                                    <div className='col-xl-8 col-lg-10 col-md-12 delivery_items_button_div bg-light'>
                                        <div className='row'>
                                            <div className='col-lg-7 delivery_item_paragraphBtn delivery_btn_delivery delivery_items_card_flex'>
                                               <span><MdShoppingCart/></span> <p>30 to 90 min |<span>Free delivery</span>|<span>$50 min</span></p>
                                            </div>
                                            <div className='col-lg-5 delivery_btn_div'>
                                                <Box
                                                    className={`${classes.loadingBtnTextAndBack}`}
                                                >
                                                    <LoadingButton style={{ width: "75%", height: "30px" }} variant="outlined">view menu</LoadingButton>

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