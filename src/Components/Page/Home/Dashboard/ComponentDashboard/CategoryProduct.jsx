import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySkeleton from "../../../../Component/Skeleton/CategorySkeleton"
const CategoryProduct = ({ ShowCategoryProduct, Category,Skeleton }) => {
   


    return (
        <React.Fragment>
            <div className='container-fluid mt-4 CategoryBordrr'>
                <div className='row'>


                       {
                             !Skeleton?
                           
                                <div className="catagoryTabs_section">
                                  
                                        <h1 className='shopByCategoryHeading'>Shop by Category</h1>
                                 
                                        <ScrollContainer className="ScrollContainerRelative">

                                       
                                            {Category?.map((ele, index) => {
                                                return (
                                                   
                                                        <div >
                                                        <div className='CategorySliderImageBlock' key={index}>
                                                            <div className='slider1'>
                                                        
                                                                <LazyLoadImage onClick={() => { ShowCategoryProduct(ele.id, ele.name) }} src={`https://sweede.app/` + ele.categoryImages} alt="glass_img" className='rounded-circle catagoriesTabImg' />
                                                            
                                                            </div>
                                                            <div className='col center Category_title' >
                                                                    <p>{ele.name.substr(0, 100)}</p>
                                                            </div>
                                                            
                                                        </div>
                                                        </div>
                                                      
                                                )
                                            })}
                                       </ScrollContainer>
                             </div>
                            
                             :
                             <CategorySkeleton></CategorySkeleton>
                    }
                           </div>
            </div>

        </React.Fragment>
    )
}
export default CategoryProduct





// category_container,catgory_wraper ,cat_main_div