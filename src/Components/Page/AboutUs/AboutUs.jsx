import AboutUsBanner from "./ComponentAboutUs/AboutUsBanner"
import BackwoodaromaByTheNumber from "./ComponentAboutUs/BackwoodaromaByTheNumber"
import AboutUsJourney from "./ComponentAboutUs/AboutUsJourney"
import OurValues from "./ComponentAboutUs/OurValues"
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup"
const AboutUs=()=>{
    return(
        <div className="container">
            <div className="row">
             <AboutUsBanner/>
             <BackwoodaromaByTheNumber/>
             <AboutUsJourney/>
            </div>
             <OurValues/>
             <HomePageDealsSignup/>
        </div>
    )
}
export default AboutUs