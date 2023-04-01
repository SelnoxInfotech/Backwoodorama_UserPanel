import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import { BsDropletHalf } from "react-icons/bs"
import { FiChevronRight } from "react-icons/fi"
import { FiChevronLeft } from "react-icons/fi"
import useStyles from "../../../../Style"
const ProductFilter = ({ProductFilterData}) => {
    const classes = useStyles()

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
            const {Id,Name,Type1,Type2,Price,Icons}=ele;
            return(
                <div key={index}>
                <div className="col-12 d-flex prodCat_gap product_category_border " onClick={()=>HandleOpenEvent(Id)}>
                <div className="col-1 brand_left_arrow">
                    <p>{(Id===OpenEvent) ? <FiChevronLeft  className={classes.muiIcons}/>:"" }</p>
                </div>
                <div className="col-1">
                    <p>{Icons}</p>
                </div>
                <div className="col-6 fontStyle">
                    <p>{Name}</p>
                </div>
                <div className="col-4 brand_right_arrow">

                    <p>{(Id===OpenEvent) ? "": <FiChevronRight className={classes.muiIcons}/>}</p>

                </div>

            </div>
            {(Id===OpenEvent) ?(<div className="col-12 product_category_border" id="Related_Brand_Data">

                <div className="col-10 px-2 ">
                    <p>{Type1}</p>
                </div>
                <div className="col-10 px-2 py-0 ">
                    <p>{Type2}</p>
                    <p className="py-0">{Price}</p>
                </div>

            </div>):""}
            </div>
            )
           
                       
        })}
          
           
        </>
    )
}
export default ProductFilter