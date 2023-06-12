import LearnCardRelatedPageBanner from "./LearnCardRelatedPageComponent/LearnCardRelatedPageBanner";
import LearnCardRelatedPageContent from "./LearnCardRelatedPageComponent/LearnCardRelatedPageContent";
const LearnCardRelatedPage=()=>{
    return(
        <div className="container">
            
         <LearnCardRelatedPageBanner/>
         <div className="row">
            <LearnCardRelatedPageContent/>
         </div>
        </div>
    )
}
export default LearnCardRelatedPage