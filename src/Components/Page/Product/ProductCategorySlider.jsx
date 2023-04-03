import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ProductCategorySlider = () => {
    const ProductSlider = styled(Slider)`
    .slick-next {
        right: 0px;
        visibility:hidden;
      } 
      .slick-slide{
        width:120px !important;
        margin-bottom:10px;
      }
      .slick-track{
        display:flex;
        width:100%;
      }
      .slick-prev {
        left: 0px;
      }
     
      .slider1 {
        display: flex;
        justify-content: center;
      }
      .Driscription_{

      }x`;
    const settings = {

        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        lazyLoad: true,

        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: false,

                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    // infinite:true,

                }
            },
            {
                breakpoint: 399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            }
        ]
    }
    const ProductCategory = [
        { image_url: "./image/prod_cat_Slider1.png" },

    { image_url: "./image/prod_cat_Slider3.png" },
    { image_url: "./image/prod_cat_Slider3.png" },
    { image_url: "./image/prod_cat_Slider1.png" },
    { image_url: "./image/prod_cat_Slider2.png" },
    { image_url: "./image/prod_cat_Slider3.png" },
    { image_url: "./image/prod_cat_Slider3.png" },
    { image_url: "./image/prod_cat_Slider1.png" },
    { image_url: "./image/prod_cat_Slider2.png" },


    ]
    return (

        <ProductSlider  {...settings}>
            {ProductCategory.map((ele, index) => {
                return (
                    <div className="col-2 mt-4 slick-slide slick-active slick-current" key={index}>
                      
                            <img id="Product_category_image" src={ele.image_url} alt="image_not found" />
                      

                    </div>
                )
            })}
        </ProductSlider>

    )
}
export default ProductCategorySlider