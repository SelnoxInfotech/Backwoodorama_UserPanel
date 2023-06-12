import LearnBanner from "./LearnComponent/LearnBanner"
import LearnContent from "./LearnComponent/LearnContent"
import LearnCards from "./LearnComponent/LearnCard"
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup"
const Learn=()=>{
    return(
        <div className="container">
         
            <LearnBanner/>
            <div className="row">
              <LearnContent/>
              <LearnCards/>
            </div>
            <HomePageDealsSignup/>

        </div>
    )
}
export default Learn