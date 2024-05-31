import LearnBanner from "./LearnComponent/LearnBanner"
import LearnContent from "./LearnComponent/LearnContent"
import LearnCards from "./LearnComponent/LearnCard"
import Newsletter from "../../Component/Newsletter/HomePageDealsSignup"
import { LearnSeo } from "../../Component/ScoPage/LearnSeo"
import React from "react";
import { useLocation } from "react-router-dom"
const Learn=()=>{

    return(
        <div className="">
            <LearnSeo location={useLocation().pathname}>  </LearnSeo>
            <LearnBanner heading="Learn"/>
            <div className="row">
              <LearnContent/>
              <LearnCards/>
            </div>
        </div>
    )
}
export default Learn