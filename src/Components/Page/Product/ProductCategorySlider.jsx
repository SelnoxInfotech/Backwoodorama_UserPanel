import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ProductCategorySlider = () => {
    const ProductCategorySlider = styled(Slider)`
    .slick-next {
        right: 0px;
      } 
      .slick-prev {
        left: 0px;
      }
     
  
      .Driscription_{

      }x`;
      const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        lazyLoad: true,

        slidesToScroll: 1,
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
    const ProductCategory = [{ image_url:"./image/flower.png" },
    { image_url:"./image/flower.png" },
     { image_url:"./image/flower.png" }

    ]
    return (
        <div className="container">
            {/* <div className="row">
                <div className="col-12"> */}
                    <ProductCategorySlider  {...settings}>
                    {ProductCategory.map((ele, index) => {
                        return (
                            <div className="col-12" key={index}>
                                <div className="col-12">
                                    <img src={ele.image_url} width={"50%"} height={"120px"} alt="image_not found" />
                                </div>

                            </div>
                        )
                    })}
                    </ProductCategorySlider>
                </div>

        //     </div>

        // </div>
    )
}
export default ProductCategorySlider