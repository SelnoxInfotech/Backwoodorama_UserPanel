import {AiOutlineSetting} from "react-icons/ai"
import {BsGraphUpArrow} from "react-icons/bs"
import {MdSettingsSuggest} from "react-icons/md"

const OurValues=()=>{
    const OurValuesArray=[{head:"Data-Driven Approach",icons:<AiOutlineSetting color="#27BE72" size={35}/>,paragraph:"Our decisions are driven by data and analytics, guiding our continuous testing and improvement efforts."}
    ,{head:"Result-Oriented",icons:<BsGraphUpArrow color="#27BE72" size={35}/>,paragraph:"We prioritize achieving optimal outcomes for clients by harnessing our team's professionalism and upholding company values."},
    {head:"Optimize your marketing",icons:<MdSettingsSuggest color="#27BE72" size={35}/>,
    paragraph:"Enhance your business by gaining deeper insights into your existing and potential customers, optimizing your marketing strategies."}]
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