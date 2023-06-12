import LearnBanner from "./LearnComponent/LearnBanner"
import LearnContent from "./LearnComponent/LearnContent"
const Learn=()=>{
    return(
        <div className="container">
         
            <LearnBanner/>
            <div className="row">
              <LearnContent/>
            </div>

        </div>
    )
}
export default Learn