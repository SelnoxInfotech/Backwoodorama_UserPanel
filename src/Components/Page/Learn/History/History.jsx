import LearnBanner from "../LearnComponent/LearnBanner";
import HistoryEditorData from "./HistoryComponent/HistoryEditorData";
import HomePageDealsSignup from "../../Home/Dashboard/ComponentDashboard/HomePageDealsSignup";
const History = () => {
    return (
        <div className="container-fluid">
            <div className="row px-2">
                <LearnBanner />
                <HistoryEditorData />
            </div>
            <div className="row px-4">
                <HomePageDealsSignup />
            </div>
        </div>
    )
}
export default History