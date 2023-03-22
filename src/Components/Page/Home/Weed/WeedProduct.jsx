// import Button from '@mui/material/Button';
import { BiMap } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';

import Box from '@mui/material/Box';
import useStyles from "../../../../Style"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const WeedProduct = () => {
    const classes = useStyles()

    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,

                }
            }
        ]
    }

    const arr = [{ img_url: "./image/flower.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/flower2.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo_png.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo2.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/flower.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },



    ]
    return (
        <>
            <div className="container-fluid  mt-4">

                <div className="row weed_had_btn mt-4">
                    <div className='col-12 border'>
                        <div className="col mt-4">
                            <h5>Want to find weed deals near you and more?</h5>
                            <p className='weed_paragraph'>Let's connect</p>

                        </div>

                    </div>

                </div>

                <div className="row weed_had_btn mt-4">
                    <div className='col-12  d-flex '>
                        <div className="col mt-4">
                            <h5>Great Weeds you can find today</h5>
                        </div>
                        <div className="col text-end mt-4">
                            <Box
                                // className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                            >
                                <LoadingButton>View All</LoadingButton>
                            </Box>
                        </div>
                    </div>

                </div>
                <Slider {...settings}>

                    {arr.map((ele, index) => {
                        return (
                            <div key={index}>
                                <div className='weed_card_container'>
                                    <div className='text-end  weed_card_heart'>
                                        <AiFillHeart className={classes.disPen_Icons} />
                                    </div>
                                    <div className='img_div'>
                                        <img src={ele.img_url} alt='img_not_found' />
                                    </div>
                                    <hr />
                                    <div></div>

                                    <div className='weed_content_div'>
                                        <div>
                                            <h1 className='comm_head_prop fontStyle'>{ele.address}</h1>
                                            <div className='d-flex'>
                                                <span className='span_nav_loc'><BiMap className={classes.disPen_Icons} /></span><h5 className='fontStyle common_sub_head weed_h5'>2917 Broadway Astoria NY 11106</h5>
                                            </div>
                                            <h5 className='fontStyle common_sub_head'>Tyonek Alaska | 11111111111111110 mi</h5>
                                            <h5 className='fontStyle common_sub_head'>Medical and recreational</h5>
                                            <div className='d-flex'>
                                                <h5 className='fontStyle common_sub_head'>Rating</h5><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
                                            </div>
                                            <div className='d-flex'>
                                                <MdOutlineShoppingCart className={classes.muiIcons} />
                                                <Box
                                                    className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                                >
                                                    <LoadingButton>Buy Now</LoadingButton>
                                                </Box>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </Slider>



            </div>
        </>
    )
}
export default WeedProduct