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
            <div className="col-lg-2 store_detail_container_right_container">
                <div className="row">
                    <div className="col-lg-12 StoreDetailContactList">
                        <ol className="StoreDetailContactList">
                            {StoreDetailSideMenubarArray.map((ele, index) => {
                                return (

                                    <li key={index}>
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
        </>
    )
}
export default StoreDetailContact