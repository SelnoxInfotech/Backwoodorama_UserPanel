import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Image } from '@mui/icons-material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { VscCircleFilled } from "react-icons/vsc"
import useStyles from '../../../../../../Style';
function Item(item) {
    return (
        <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
    );
}
const HomePageBanner = () => {
    const classes = useStyles()
    var items = [
        {
            name: "Random Name #1",
            description: "/image/banner1.jpg"
        },
        {
            name: "Random Name #2",
            description: "/image/banner2.jpg"
        },
        {
            name: "Random Name #3",
            description: "/image/b3.jpg"
        }
    ];

    const [index, setIndex] = React.useState(0);

    const handleChange = (cur, prev) => {
        setIndex(cur);
        console.log(cur, prev);
    };

    return (
        <div className=' container-fluid homepage_carousal_container'>
            <div className='row'>
                <div className='col-12'>

                    <div className='row'>
                        <div className='col-12'>


                            <Carousel
                                fullHeightHover={true}     // We want the nav buttons wrapper to only be as big as the button element is
                                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                                    style: {
                                        backgroundColor: 'black',
                                        borderRadius: 0
                                    }
                                }}
                                navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                                    style: {
                                        bottom: '0',
                                        top: '40px',
                                        display:"none"

                                    }

                                }}


                                index={index}
                                onChange={handleChange}
                                interval={10000}
                                animation="slide"
                                autoPlay={false}
                                indicators={false}
                                stopAutoPlayOnHover
                                swipe
                                className="my-carousel"
                            >
                                {items.map((item, i) => (
                                    <div>
                                        <LazyLoadImage className='HomePageBanner_image' src={item.description}></LazyLoadImage>

                                    </div>
                                ))}
                            </Carousel>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-12 center home_page_banner_btn_container'>
                            {items.map((item, i) => (
                                <button
                                    id="home_page_banner_btn"
                                    onClick={() => setIndex(i)}
                                    style={{ background: i === index ? "#ccc" : "#fff" }}
                                >
                                    <VscCircleFilled className={classes.homePage_iconsColor} />
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
export default HomePageBanner