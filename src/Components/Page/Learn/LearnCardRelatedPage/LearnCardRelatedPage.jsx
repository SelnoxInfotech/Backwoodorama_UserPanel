import LearnCardRelatedPageBanner from "./LearnCardRelatedPageComponent/LearnCardRelatedPageBanner";
import LearnCardRelatedPageContent from "./LearnCardRelatedPageComponent/LearnCardRelatedPageContent";
import HomePageDealsSignup from "../../Home/Dashboard/ComponentDashboard/HomePageDealsSignup";
const LearnCardRelatedPage=()=>{
    return(
        <div className="container">
            
         <LearnCardRelatedPageBanner/>
         <div className="row">
            <LearnCardRelatedPageContent/>
         </div>
           <HomePageDealsSignup/>
        </div>
    )
}
export default LearnCardRelatedPage