import LearnCardRelatedPageBanner from "./LearnCardRelatedPageComponent/LearnCardRelatedPageBanner";
import LearnCardRelatedPageContent from "./LearnCardRelatedPageComponent/LearnCardRelatedPageContent";
import Newsletter from "../../../Component/Newsletter/HomePageDealsSignup";
const LearnCardRelatedPage=()=>{
    return(
        <div className="container">
            
         <LearnCardRelatedPageBanner/>
         <div className="row">
            <LearnCardRelatedPageContent/>
         </div>
           <Newsletter/>
        </div>
    )
}
export default LearnCardRelatedPage