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
        width:117px !important;
        margin-bottom:10px;
      }
   
      .slick-track {
        display: flex;
        width: 1494px !important;
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
        slidesToShow: 14,
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
        { image_url: "./image/prod_cat_Slider1.png",category_name:"Indica" },

    { image_url: "./image/prod_cat_Slider3.png",category_name:"Flower" },
    { image_url: "./image/prod_cat_Slider3.png" ,category_name:"Indica"},
    { image_url: "./image/prod_cat_Slider1.png" ,category_name:"Sativa"},
    // { image_url: "./image/prod_cat_Slider2.png" ,category_name:"Sativa"},
    // { image_url: "./image/prod_cat_Slider3.png",category_name:"Sativa" },
    // { image_url: "./image/prod_cat_Slider3.png",category_name:"Sativa" },
    // { image_url: "./image/prod_cat_Slider1.png" ,category_name:"Sativa"},
    // { image_url: "./image/prod_cat_Slider2.png",category_name:"Flower" },
    // { image_url: "./image/prod_cat_Slider3.png" ,category_name:"Flower"},
    // { image_url: "./image/prod_cat_Slider3.png",category_name:"Flower" },
    // { image_url: "./image/prod_cat_Slider1.png" ,category_name:"Flower"},
    // { image_url: "./image/prod_cat_Slider2.png" ,category_name:"Flower"},
    // { image_url: "./image/prod_cat_Slider3.png" ,category_name:"Flower"},
    // { image_url: "./image/prod_cat_Slider3.png" ,category_name:"Flower"},
    // { image_url: "./image/prod_cat_Slider1.png" ,category_name:"Flower"},
    // { image_url: "./image/prod_cat_Slider2.png" ,category_name:"Flower"},

    ]
    return (

        <ProductSlider  {...settings}>
            {ProductCategory.map((ele, index) => {
                return (
                    <div className="col-12" key={index}>
                    <div className="col-2 mt-4 slick-slide slick-active slick-current" >
                      
                            <img id="Product_category_image" src={ele.image_url} alt="image_not found" />
                      
                         
                    </div>
                    <div className="col-12 product_category_name">
                    <p>{ele.category_name}</p>
                 </div>
                 </div>
                )
            })}
        </ProductSlider>

    )
}
export default ProductCategorySlider