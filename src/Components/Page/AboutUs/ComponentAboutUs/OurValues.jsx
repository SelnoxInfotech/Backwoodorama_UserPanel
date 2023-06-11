import {AiOutlineSetting} from "react-icons/ai"
import {BsGraphUpArrow} from "react-icons/bs"
import {MdSettingsSuggest} from "react-icons/md"

const OurValues=()=>{
    const OurValuesArray=[{head:"Data-Driven Approach",icons:<AiOutlineSetting color="#27BE72" size={35}/>,paragraph:"We make all of our decisions based on data and analytics. We continuously test and iterate to ensure that we are making ."}
    ,{head:"Result-Oriented",icons:<BsGraphUpArrow color="#27BE72" size={35}/>,paragraph:"We focus on achieving the best results for our clients in the most efficient way. This is possible thanks to the great professionalism of our team and strict adherence to the company values."},
    {head:"Result-Oriented",icons:<MdSettingsSuggest color="#27BE72" size={35}/>,paragraph:"We focus on achieving the best results for our clients in the most efficient way. This is possible thanks to the great professionalism of our team and strict adherence to the company values."}]
    return(
        <div className="row">
            <div className="center  ourValue_main_headings_container mt-4"><h1 className="ourValue_main_headings">Our Values</h1></div>
            {OurValuesArray.map((items,index)=>{
                return(
                    <div className="col-md-4 col-sm-6 col-12 mt-2" key={index}>
                         <section className="border ourValues_card_container px-2">
                            <div className="w-100  ourvalues_icons_container">
                                <span>{items.icons}</span>
                            </div>
                            <div className="w-100 values_heading_container ">
                            <h1 className="ellipsis values_heading">{items.head}</h1>
                            </div>
                            <div className="values_paragraph_container">
                            <p className="values_paragraph">{items.paragraph}</p>

                            </div>
                         </section>
                    </div>
                )
            })}


        </div>
    )
}
export default OurValues