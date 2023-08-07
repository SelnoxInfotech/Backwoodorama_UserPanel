import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IconButton } from "@mui/material";
import WhisListCard from "./WhisListComponent/WhisListCards";
const WhisLists = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 whislistBackBtn_Container px-0">
                    <span><IconButton><MdOutlineKeyboardArrowLeft color="#000000"/></IconButton></span><span className="backprofileBtnname">Back Profile</span>

                </div>
                <div className="col-12 productsCount_container">
                    <p className="productsCount">Products<span className="productsCountNumber">22 results</span></p>
                </div>
                <WhisListCard/>
            </div>

        </div>
    )
}
export default WhisLists