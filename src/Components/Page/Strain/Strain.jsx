import StrainType from "./StrainComponent/StrainType"
import PopularStrain from "./StrainComponent/PopularStrain"
import {StrainSeo} from "../../Component/ScoPage/LearnSeo"
const Strain = () => {
  const PopularStrainArray = [{ imgUrl: "/image/glass.png", name: "0G Kush", secName: "Hybrid" },
  { imgUrl: "./image/social.png", name: "0G Galeto", secName: "Indica" },
  { imgUrl: "./image/sativa.png", name: "0G Runtz", secName: "Sativa" },
  { imgUrl: "./image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
  { imgUrl: "./image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
  { imgUrl: "./image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
  { imgUrl: "./image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
  { imgUrl: "./image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
  { imgUrl: "./image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
  { imgUrl: "./image/edibles.webp", name: "0G Kush", secName: "Hybrid" }

  ]

  const popularStrainHeading = "Popular strain"
  return (
    <div className="container-fluid">
      <StrainSeo></StrainSeo>
      <PopularStrain SliderDataArray={PopularStrainArray} Heading={popularStrainHeading} />
      <StrainType/>
      <div className="row">
        <div className="col-12">
          <h2 className="strainPopular_heading">Popular strains products</h2>
        </div>

      </div>
    </div>
  )
}
export default Strain