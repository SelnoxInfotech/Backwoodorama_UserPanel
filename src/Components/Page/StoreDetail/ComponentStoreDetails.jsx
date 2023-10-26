import React from "react";
import { FaCarAlt } from "react-icons/fa"
import { GiPlainCircle } from "react-icons/gi"
import { BiMobileAlt } from "react-icons/bi"
import {BsFillCarFrontFill} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {SiBrandfolder} from "react-icons/si"
import { HiCheckCircle } from "react-icons/hi";
import { FiPlus } from "react-icons/fi"
import { CgGlobeAlt } from "react-icons/cg"
import { SlSocialSpotify } from "react-icons/sl"
import { RiSettings2Fill } from "react-icons/ri"
import { MdOutlineImageSearch , MdOutlineNotAccessible , MdSecurity , MdAssistantNavigation , MdEmail } from "react-icons/md"
import {Link} from "react-router-dom"
const StoreDetail1 = ({storeDetails}) => {
    console.log(storeDetails , 'storeDetails')
    const AmmenitiesArray = [{ item: "Accessible" ,icon:<MdOutlineNotAccessible/>,color:"#000000"}, 
    { item: "age" ,icon:<MdOutlineImageSearch/>,color:"#000000"}, { item: "Curbside Pickup",icon:<BsFillCarFrontFill/>,color:"#000000" },
    { item: "Medical",icon:<AiOutlinePlus/> ,color:"#000000"}, { item: "Security" ,icon:<MdSecurity/>,color:"#000000"}, { item: "Brand verify",icon:<SiBrandfolder/>,color:"#000000" }]
    const StoreDetailSideMenubarArray = [{ icons: <HiCheckCircle  size={14}/>, item: "List Information", color: "#000000" },
    { icons: <FaCarAlt  size={14}/>, item: "StoreFront|Pickup", color: "#000000" },
    { icons: <GiPlainCircle size={14}/>, item: "Closed", color: "#000000" },
    { icons: <MdAssistantNavigation size={14}/>, item: "California", color: "#000000" },
    { icons: <BiMobileAlt size={14}/>, item: "+916392004333", color: "#000000" },
    { icons: <FiPlus size={14} />, item: "Medical", color: "#000000" },
    { icons: <MdEmail size={14}/>, item: "Email", color: "#000000" },
    { icons: <CgGlobeAlt size={14}/>, item: "Website", color: "#000000" },
    { icons: <SlSocialSpotify size={14}/>, item: "Social Media", color: "#000000" },
    { icons: <RiSettings2Fill size={14}/>, item: "Support", color: "#000000" },
    ]
    const storeDetailSideMenubarArray1 = [
        { icons: <MdAssistantNavigation />, item: "California", color: "#000000" },
        { icons: <FaCarAlt />, item: "Direction", color: "#000000" },
        { icons: <GiPlainCircle />, item: "Closed", color: "#000000" },
        { icons: <BiMobileAlt />, item: "9122222", color: "#000000" },


    ]
    return (
        <React.Fragment>
        <div className="container-fluid">

            <div className="row">
            <div className="col-lg-12  fontStyle px-0">
                    <h2 className="store_detail_heading">Store details</h2>
                </div>
            <hr />

            </div>
            
                <div className="row  center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 amenities_container">
                        <div className="row center">
                            <div className="col-12  fontStyle">
                                <h2 className="amenties_nameHeading">Amenities</h2>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 ameitiesList_container_height">
                                <ol className="amenities_list">
                                    
                                    {AmmenitiesArray.map((ele, index) => {
                                        return (
                                            <Link to="#/" key={index} className="amenities_link">
                                            <li className="amenties_list_items">
                                              <div>
                                              <p style={{color:ele.color}}>{ele.icon}</p>
                                                <p className="amenities_list_item_paragrap listfontStyle">
                                                {ele.item}
                                                </p>
                                              </div>
                                                
                                                </li>
                                            </Link>

                                        )
                                    })}
                                </ol>
                            </div>

                        </div>


                    </div>

                </div>

            <div className="row  my-2">
                <div className="col-lg-2 storeDetail_container my-2">
                <div className="">

                    <div className="row">
                        <div className="col-12">
                            <h3 className="fontStyle store_detail_menu_heading">Mr nice guys DC</h3>

                        </div>

                    </div>


                    <div className="col-12 store_detail_SideMenuBar_container">

                        <ol className="store_detail_SideMenuBar_order_list">

                            {StoreDetailSideMenubarArray.map((ele, index) => {
                                return (
                                    <li className="StoreDetailSidemenuBarList d-flex" key={index}>
                                        <span  style={{ color: ele.color }}>{ele.icons}</span>
                                        <span className="StoreDetailSideMenu_listItems">{ele.item}</span>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>




                </div>

                </div>
                <div className="col-lg-8 store_detail_container my-2">
            
                    <div className="row">
                        <div className="col-12 StoreDetail_paragraph fontStyle store_middle_content_top ">
                            <p>About Us</p>
                        </div>
                        <div  dangerouslySetInnerHTML={{__html: storeDetails[0]?.Stores_Description}}>
                         
                         </div>
                    </div>

                        

                </div>
                <div className="col-lg-2 store_detail_container_right_container my-2">
                    <div className="col-lg-12 ">
                        <ol className="StoreDetailContactList">
                            {storeDetailSideMenubarArray1.map((ele, index) => {
                                return (
                                    <li key={index} className="d-flex gap-2">
                                        <span className="storeDetailContact_icons" style={{color:ele.color}}>
                                        {ele.icons}
                                        </span>
                                        <span className="StoreDetailContactList_itemss">
                                        {ele.item}
                                        </span>
                                    </li>
                                )
                            })}
                        </ol>


                    </div>

            </div>
            </div>
        </div>



        </React.Fragment>
    )
}
export default StoreDetail1