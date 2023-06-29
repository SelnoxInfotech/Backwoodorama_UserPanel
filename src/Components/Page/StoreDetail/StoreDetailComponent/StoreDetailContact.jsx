import { FaCarAlt } from "react-icons/fa"
import { GiPlainCircle } from "react-icons/gi"
import { BiMobileAlt } from "react-icons/bi"
import { MdAssistantNavigation } from "react-icons/md";

const StoreDetailContact = () => {
    const StoreDetailSideMenubarArray = [
        { icons: <MdAssistantNavigation />, item: "California", color: "#000000" },
        { icons: <FaCarAlt />, item: "Direction", color: "#000000" },
        { icons: <GiPlainCircle />, item: "Closed", color: "#000000" },
        { icons: <BiMobileAlt />, item: "9122222", color: "#000000" },


    ]
    return (
        <>
            <div className="col-lg-2 store_detail_container_right_container my-2">
                    <div className="col-lg-12 ">
                        <ol className="StoreDetailContactList">
                            {StoreDetailSideMenubarArray.map((ele, index) => {
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
        </>
    )
}
export default StoreDetailContact