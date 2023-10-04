import LearnBanner from "./LearnComponent/LearnBanner"
import LearnContent from "./LearnComponent/LearnContent"
import LearnCards from "./LearnComponent/LearnCard"
import Newsletter from "../../Component/Newsletter/HomePageDealsSignup"
import { LearnSeo } from "../../Component/ScoPage/LearnSeo"
import React from "react";
const Learn=()=>{

    return(
        <div className="container">
         <LearnSeo></LearnSeo>
            <LearnBanner/>
            <div className="row">
              <LearnContent/>
              <LearnCards/>
            </div>
            <Newsletter/>

        </div>
    )
}
export default Learn