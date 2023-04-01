import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import { BsDropletHalf } from "react-icons/bs"
import { FiChevronRight } from "react-icons/fi"
import { FiChevronLeft } from "react-icons/fi"
const ProductFilter = ({ProductFilterData}) => {
    // const [OpenEvent, SetOpenEvent] = React.useState(true)
    const [OpenEvent, SetOpenEvent] = React.useState(null)

    const HandleOpenEvent = (Id) => {
        if(OpenEvent===Id){
            SetOpenEvent(null)
            return false;
        }
        SetOpenEvent(Id)

    }

    return (
        <>        
        {ProductFilterData.map((ele,index)=>{
            const {Id,Name,Type1,Type2,Icons}=ele;
            return(
                <div key={index}>
                <div className="col-12 d-flex prodCat_gap product_category_border " onClick={()=>HandleOpenEvent(Id)}>
                <div className="col-1 brand_left_arrow">
                    <p>{(Id===OpenEvent) ? <FiChevronLeft />:"" }</p>
                </div>
                <div className="col-1">
                    <p>{Icons}</p>
                </div>
                <div className="col-6">
                    <p>{Name}</p>
                </div>
                <div className="col-4 brand_right_arrow">

                    <p>{(Id===OpenEvent) ? "": <FiChevronRight />}</p>

                </div>

            </div>
            {(Id===OpenEvent) ?(<div className="col-12 product_category_border" id="Related_Brand_Data">

                <div className="col-10 p-2">
                    <p>{Type1}</p>
                </div>
                <div className="col-10">
                    <p>{Type2}</p>
                </div>

            </div>):""}
            </div>
            )
           
                       
        })}
          
           
        </>
    )
}
export default ProductFilter