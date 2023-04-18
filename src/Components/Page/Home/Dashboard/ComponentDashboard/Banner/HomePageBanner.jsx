import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Image } from '@mui/icons-material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Item(item) {
    return (
        <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
    );
}
const HomePageBanner = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "/image/banner1.jpg"
        },
        {
            name: "Random Name #2",
            description:  "/image/banner2.jpg"
        },
        {
            name: "Random Name #3",
            description: "/image/cat_pro_7.jpg"
        }
    ];

    const [index, setIndex] = React.useState(0);

    const handleChange = (cur, prev) => {
        setIndex(cur);
        console.log(cur, prev);
    };

    return (
        <div>
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
                      top: '40px'

                  }
                  
              }} 
            
              NextIcon='next'             // Change the "inside" of the next button to "next"
              PrevIcon='prev'             // Change the "inside of the prev button to "prev"
        
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
                        <LazyLoadImage style={{ width: "100%", height: "450px" }}src={item.description}></LazyLoadImage>
                 
                     </div>
                ))}
            </Carousel>
            {items.map((item, i) => (
                <button
                    onClick={() => setIndex(i)}
                    style={{ background: i === index ? "#ccc" : "#fff" }}
                >
                   *
                </button>
            ))}
        </div>
    );
}
export default HomePageBanner