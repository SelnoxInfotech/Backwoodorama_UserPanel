import * as React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySkeleton from "../../../../Component/Skeleton/CategorySkeleton"
import {FirstLetterCaps} from "../../../../../Hooks/Function"
const CategoryProduct = ({ ShowCategoryProduct, Category, Skeleton }) => {


    return (
        <React.Fragment>
            <div className='container-fluid CategoryBordrr'>
                <div className='row'>
                       {
                             !Skeleton?
                           
                                <div className="catagoryTabs_section">
                                        <h2 className='shopByCategoryHeading'>Shop by Category</h2>
                                        <ScrollContainer className="ScrollContainerRelative">
                                    {Category?.map((ele, index) => {
                                        return (
                                            <div className='CategorySliderImageBlock' key={index}>
                                                <div className='slider1'>

                                                    <LazyLoadImage 
                                                    onError={event => {
                                                        event.target.src = "/image/category.png"
                                                        event.onerror = null
                                                    }}
                                                    onClick={() => { ShowCategoryProduct(ele.id, ele.name) }} 
                                                    src={ele.categoryImages} alt={ele.name.substr(0, 100)} 
                                                    className='rounded-circle catagoriesTabImg' />

                                                </div>
                                                <div className='col center Category_title' >
                                                    <p>{FirstLetterCaps(ele.name.substr(0, 100))}</p>
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