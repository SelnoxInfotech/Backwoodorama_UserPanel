import LearnBanner from "../LearnComponent/LearnBanner"
import LawsOptions from "./LawsComponent/LawsOptions"
const Laws=()=>{
    return(
        <div className="container-fluid">
          <div className="row px-2">
            <LearnBanner/>
            <LawsOptions/>
          </div>

        </div>
    )
}
export default Laws