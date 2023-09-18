import LearnBanner from "./LearnComponent/LearnBanner"
import LearnContent from "./LearnComponent/LearnContent"
import LearnCards from "./LearnComponent/LearnCard"
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup"
import { LearnSeo } from "../../Component/ScoPage/LearnSeo"
import Axios from "axios";
import React from "react";
const Learn=()=>{
    // const[s, Se] = React.useState(false)
  
    // React.useEffect(()=>{
    //     Axios.get(
    //         'https://www.g11fantasy.com/NewsSection/Get-News/',
    //     ).then(response => {
    //         Se(!s)
    //     }).catch(
    //         function (error) {})
    //         Axios.get(
    //             '       https://g11fantasy.com/NewsSection/FilterbySubCategory/2',
    //         ).then(response => {
    //             Se(!s)
    //         }).catch(
    //             function (error) {})
    //             Axios.get(
    //                 '       https://g11fantasy.com/NewsSection/FilterbySubCategory/1',
    //             ).then(response => {
    //                 Se(!s)
    //             }).catch(
    //                 function (error) {})
    //                 Axios.get(
    //                     '       https://g11fantasy.com/NewsSection/FilterbySubCategory/3',
    //                 ).then(response => {
    //                     Se(!s)
    //                 }).catch(
    //                     function (error) {})
    //                     Axios.get(
    //                         '       https://g11fantasy.com/NewsSection/FilterbySubCategory/4',
    //                     ).then(response => {
    //                         Se(!s)
    //                     }).catch(
    //                         function (error) {})
                 
    // },[s])


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