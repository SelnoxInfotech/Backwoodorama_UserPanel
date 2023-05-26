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
    const StoreDetailSideMenubarArray = [{ icons: <HiCheckCircle />, item: "List Information" ,color:"#000000"}, 
    { icons: <FaCarAlt />, item: "StoreFront|Pickup",color:"#000000" },
     { icons: <GiPlainCircle />, item: "Closed" ,color:"#000000"},
     { icons: <MdAssistantNavigation />, item: "California",color:"#000000" },
     { icons: <BiMobileAlt />, item: "+916392004333" ,color:"#000000"},
     { icons: <FiPlus />, item: "Medical" ,color:"#000000"},
     { icons: <MdEmail />, item: "Email",color:"#000000" },
     { icons: <CgGlobeAlt />, item: "Website",color:"#000000" },
     { icons: <SlSocialSpotify />, item: "Social Media" ,color:"#000000"},
     { icons: <RiSettings2Fill />, item: "Support" ,color:"#000000"},
    ]
    const classes=useStyles()
    return (
        <div className="col-lg-2 storeDetail_container my-2">
            <div className="">

            <div className="row">
                <div className="col-12 center">
                <p className="fontStyle store_detail_menu_heading">Mr nice guys DC</p>

                </div>

            </div>
            <div className="row">
             
                    <div className="col-lg-12">

                    <ol  className="store_detail_SideMenuBar_order_list">

                    {StoreDetailSideMenubarArray.map((ele, index) => {
                        return (
                            <li className="StoreDetailSidemenuBarList" key={index}>
                                <div className="row">
                                    <div className="col-2">
                                    <p style={{color:ele.color}}>{ele.icons}</p>

                                    </div>
                                    <div className="col-10">
                                    <p>{ele.item}</p>

                                    </div>

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