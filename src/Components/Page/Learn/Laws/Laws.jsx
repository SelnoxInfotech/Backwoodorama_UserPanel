import LearnBanner from "../LearnComponent/LearnBanner"
import LawsOptions from "./LawsComponent/LawsOptions"
import HomePageDealsSignup from "../../Home/Dashboard/ComponentDashboard/HomePageDealsSignup"
const Laws = () => {
  return (
    <div className="container-fluid">
      <div className="row px-2">
        <LearnBanner />
        <LawsOptions />

      </div>
      <div className="row px-4">
        <HomePageDealsSignup />
      </div>

    </div>
  )
}
export default Laws