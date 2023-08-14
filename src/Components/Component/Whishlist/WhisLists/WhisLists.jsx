import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IconButton } from "@mui/material";
import WhisListCard from "./WhisListComponent/WhisListCards";
import Createcontext from "../../../../Hooks/Context"
import { useNavigate } from "react-router-dom";
const WhisLists = () => {
    const { state } = React.useContext(Createcontext)
    const Navigate = useNavigate()
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 whislistBackBtn_Container px-0">
                    <span><IconButton onClick={() => Navigate(-1)}><MdOutlineKeyboardArrowLeft color="#000000"/></IconButton></span><span onClick={() => Navigate(-1)} className="backprofileBtnname">Back Profile</span>

                </div>
                <div className="col-12 productsCount_container">
                    <h1 className="productsCount">Products<span className="productsCountNumber">{Object.values(state.WishList).reduce((a, item) => a + item, 0)}</span></h1>
                </div>
                <WhisListCard/>
            </div>

        </div>
    )
}
export default WhisLists