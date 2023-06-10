import AboutUsBanner from "./ComponentAboutUs/AboutUsBanner"
import BackwoodaromaByTheNumber from "./ComponentAboutUs/BackwoodaromaByTheNumber"
import AboutUsJourney from "./ComponentAboutUs/AboutUsJourney"
const AboutUs=()=>{
    return(
        <div className="container">
            <div className="row">
             <AboutUsBanner/>
             <BackwoodaromaByTheNumber/>
             <AboutUsJourney/>
            </div>

        </div>
    )
}
export default AboutUs