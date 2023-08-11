import { HiCheckCircle } from "react-icons/hi";
import { FaCarAlt } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";
import { MdAssistantNavigation } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi"
import { FiPlus } from "react-icons/fi"
import { MdEmail } from "react-icons/md"
import { CgGlobeAlt } from "react-icons/cg"
import { SlSocialSpotify } from "react-icons/sl"
import { RiSettings2Fill } from "react-icons/ri"
const StoreDetailSideMenuBar = () => {
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
    return (
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
    )
}
export default StoreDetailSideMenuBar