import { HiCheckCircle } from "react-icons/hi";
import { FaCarAlt } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";
import {MdAssistantNavigation} from "react-icons/md";
import {BiMobileAlt} from "react-icons/bi"
import {FiPlus} from "react-icons/fi"
import {MdEmail} from "react-icons/md"
import {CgGlobeAlt} from "react-icons/cg"
import {SlSocialSpotify} from "react-icons/sl"
import {RiSettings2Fill} from "react-icons/ri"
import useStyles from "../../../../Style"
const StoreDetailSideMenuBar = () => {
    const StoreDetailSideMenubarArray = [{ icons: <HiCheckCircle />, item: "List Information" }, 
    { icons: <FaCarAlt />, item: "StoreFront|Pickup" },
     { icons: <GiPlainCircle />, item: "Closed" },
     { icons: <MdAssistantNavigation />, item: "California" },
     { icons: <BiMobileAlt />, item: "+916392004333" },
     { icons: <FiPlus />, item: "Medical" },
     { icons: <MdEmail />, item: "Email" },
     { icons: <CgGlobeAlt />, item: "Website" },
     { icons: <SlSocialSpotify />, item: "Social Media" },
     { icons: <RiSettings2Fill />, item: "Support" },
    ]
    const classes=useStyles()
    return (
        <div className="col-lg-2 storeDetail_container">
            <div className="row">
             
                <div className="row">
                    <div className="col-lg-12">
                    <ol  className="store_detail_SideMenuBar_order_list">
                    <p className="fontStyle store_detail_menu_heading">Mr nice guys DC</p>

                    {StoreDetailSideMenubarArray.map((ele, index) => {
                        return (
                            <li>
                                <div className="Store_detail_list">
                                <p>{ele.icons}</p>
                                <p>{ele.item}</p>
                                </div>

                            </li>
                        )
                    })}
                </ol>
                    </div>

                </div>
             

            </div>

        </div>
    )
}
export default StoreDetailSideMenuBar