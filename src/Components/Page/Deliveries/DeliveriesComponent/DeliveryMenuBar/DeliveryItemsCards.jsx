import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from '../../../../../Style';
const DeliveryItemsCard = () => {
    const classes=useStyles()
    const DeliveryItemsCardArray = [{
        imgurl: "/image/cat_prod_6.jpg", item_name: "Jaderoom delivery Irvine",
        address: "Medical and recreational", address2: "Irvine", total_items: 1390,
        Number_of_items_type1: 68, Number_of_items_type2: 200, Number_of_items_type3: 320, Number_of_items_type4: 201, Number_of_items_type5: 100
    }]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {DeliveryItemsCardArray.map((items, index) => {
                        return (
                            <div className="col-lg-8 col-md-10 col-sm-12 col-12 delivery_items_cards_container" key={index}>
                                <div className='row p-2'>
                                    <div className='col-lg-8 delivery_image_content_Container_height'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-5 delivery_items_card_img_container px-0'>
                                                <LazyLoadImage className='delivery_card_image_height' src={items.imgurl} alt='Image_not found' height={"100px"} />

                                            </div>
                                            <div className='col-lg-7 col-7'>
                                                <div className='DeliveryItem_heading deliver_items_content_same_height ellipsis'>
                                                    <h1>{items.item_name}</h1>
                                                </div>
                                                <div className='delivery_items_card_flex deliver_items_content_same_height ellipsis'>
                                                    <p><AiFillStar /></p><span className='delivery_items_spanss'>5.0(27)</span>

                                                </div>
                                                <div className='deliver_items_content_same_height ellipsis'>
                                                    <p>{items.address}</p>
                                                </div>
                                                <div className='deliver_items_content_same_height ellipsis'>
                                                    <p>{items.address2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 delivery_items_right_side_container_height'>
                                        <div className='total_items deliver_items_content_same_height'>
                                            <p>{items.total_items} Items</p>
                                        </div>
                                        <div className='delivery_items_card_flex deliver_items_content_same_height'>
                                            <p><AiFillStar /></p><span>Concentrate {items.Number_of_items_type1} items</span>
                                        </div>
                                        <div className='delivery_items_card_flex deliver_items_content_same_height'>
                                            <p><AiFillStar /></p><span>Edible {items.Number_of_items_type2} items</span>
                                        </div>
                                        <div className='delivery_items_card_flex deliver_items_content_same_height'>
                                            <p><AiFillStar /></p><span>flower {items.Number_of_items_type3} items</span>
                                        </div>
                                        <div className='delivery_items_card_flex deliver_items_content_same_height'>
                                            <p><AiFillStar /></p><span>Vape pens {items.Number_of_items_type4} items</span>
                                        </div>
                                        <div className='delivery_items_card_flex deliver_items_content_same_height'>
                                            <p><AiFillStar /></p><span>others {items.Number_of_items_type5} items</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row p-2'>
                                    
                                    <div className='col-lg-8 delivery_items_button_div bg-light'>
                                        <div className='row'>
                                            <div className='col-lg-5 delivery_btn_delivery'>
                                                <p>30 to 90 min</p>
                                            </div>
                                            <div className='col-lg-7 delivery_btn_div'>
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