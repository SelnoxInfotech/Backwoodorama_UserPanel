import LearnBanner from "../LearnComponent/LearnBanner";
import HistoryEditorData from "./HistoryComponent/HistoryEditorData";
import Newsletter from "../../../Component/Newsletter/HomePageDealsSignup";
import React from "react";
const History = () => {



 
    return (
        <div className="container-fluid">
            <div className="row px-2">
                <LearnBanner />
                <HistoryEditorData />
            </div>
            <div className="row px-4">
                <Newsletter />
            </div>
        </div>
    )
}
export default History