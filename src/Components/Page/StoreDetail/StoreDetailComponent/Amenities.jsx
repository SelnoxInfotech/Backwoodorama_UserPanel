import {MdOutlineNotAccessible} from "react-icons/md"
import {BsFillCarFrontFill} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {MdSecurity} from "react-icons/md"
import {SiBrandfolder} from "react-icons/si"
import {Link} from "react-router-dom"
const Amenities = () => {
    const AmmenitiesArray = [{ item: "Accessible" ,icon:<MdOutlineNotAccessible/>}, 
    { item: "minimum age" ,icon:<MdOutlineNotAccessible/>}, { item: "Curbside pickup",icon:<BsFillCarFrontFill/> },
    { item: "Medical",icon:<AiOutlinePlus/> }, { item: "Security" ,icon:<MdSecurity/>}, { item: "Brand verify",icon:<SiBrandfolder/> }]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 amenities_container">
                        <div className="row">
                            <div className="col-12 amenties_paragrap fontStyle">
                                <p>Amenities</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ameitiesList_container_height">
                                <ol className="amenities_list">
                                    {AmmenitiesArray.map((ele, index) => {
                                        return (
                                            <Link to="#/" key={index} className="amenities_link">
                                            <li>
                                                <p>{ele.icon}</p>
                                                <p className="amenities_list_item_paragrap">
                                                {ele.item}
                                                </p>
                                                
                                                </li>
                                            </Link>

                                        )
                                    })}
                                </ol>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}
export default Amenities