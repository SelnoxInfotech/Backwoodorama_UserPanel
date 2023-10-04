import LearnBanner from "../LearnComponent/LearnBanner"
import LawsOptions from "./LawsComponent/LawsOptions"
import Newsletter from "../../../Component/Newsletter/HomePageDealsSignup"
import { Law } from "../../../Component/ScoPage/LearnSeo"
const Laws = () => {
  return (
    <div className="container-fluid">
      <Law></Law>
      <div className="row px-2">
        <h1 className="canabisLawMainHeadings">Cannabis Law in USA, Canada & Internationals</h1>
        <LearnBanner />
        <LawsOptions />

      </div>
      <div className="row px-4">
        <Newsletter />
      </div>

    </div>
  )
}
export default Laws