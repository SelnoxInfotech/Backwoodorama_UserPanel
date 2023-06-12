import AboutUsBanner from "./ComponentAboutUs/AboutUsBanner"
import BackwoodaromaByTheNumber from "./ComponentAboutUs/BackwoodaromaByTheNumber"
import AboutUsJourney from "./ComponentAboutUs/AboutUsJourney"
import OurValues from "./ComponentAboutUs/OurValues"
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup"
import ClientPreachSlider from "./ComponentAboutUs/ClientPreachSlider"
const AboutUs=()=>{
    return(
        <div className="container">
            <div className="row">
             <AboutUsBanner/>
             <BackwoodaromaByTheNumber/>
             <AboutUsJourney/>
            </div>
             <OurValues/>
             <ClientPreachSlider/>
             <HomePageDealsSignup/>
        </div>
    )
}
export default AboutUs