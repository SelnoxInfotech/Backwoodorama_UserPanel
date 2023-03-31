import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import { BsDropletHalf } from "react-icons/bs"
import { FiChevronRight } from "react-icons/fi"
import { FiChevronLeft } from "react-icons/fi"
const ProductFilter = ({ProductFilterData}) => {
    const [OpenEvent, SetOpenEvent] = React.useState(true)
    const HandleOpenEvent = () => {
        SetOpenEvent(!OpenEvent)
        // SetOpenEvent(!e.target.value)

    }

    return (
        <>        
        {ProductFilterData.map((ele,index)=>{
            return(
                <div key={index}>
                <div className="col-12 d-flex prodCat_gap product_category_border " onClick={HandleOpenEvent}>
                <div className="col-1 brand_left_arrow">
                    <p>{OpenEvent ? "" : <FiChevronLeft />}</p>
                </div>
                <div className="col-1">
                    <p>{ele.Icons}</p>
                </div>
                <div className="col-6">
                    <p>{ele.Name}</p>
                </div>
                <div className="col-4 brand_right_arrow">

                    <p>{OpenEvent ? <FiChevronRight /> : ""}</p>

                </div>

            </div>
            {OpenEvent ? "" : (<div className="col-12 product_category_border" id="Related_Brand_Data">
                <div className="col-10 p-2">
                    <p>{ele.Type1}</p>
                </div>
                <div className="col-10">
                    <p>{ele.Type2}</p>
                </div>

            </div>)}
            </div>
            )
                       
        })}
          
           
        </>
    )
}
export default ProductFilter