import LearnBanner from "./LearnComponent/LearnBanner"
import LearnContent from "./LearnComponent/LearnContent"
import LearnCards from "./LearnComponent/LearnCard"
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup"
import { LearnSeo } from "../../Component/ScoPage/LearnSeo"
const Learn=()=>{
  



    return(
        <div className="container px-3">
         <LearnSeo></LearnSeo>
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