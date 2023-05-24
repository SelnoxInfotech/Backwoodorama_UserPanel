import StrainType from "./StrainComponent/StrainType"
import PopularStrain from "./StrainComponent/PopularStrain"
import Footer from "../../Component/Footer/Footer"
const Strain=()=>{
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
  const StrainTypeCardArray = [
    { imgUrl: "./image/indica.png", head1: "Indica" },
    { imgUrl: "./image/sativa.png", head1: "Hybrid" },
    { imgUrl: "./image/social.png", head1: "Sativa" },
    { imgUrl: "./image/Leafly March Promo.png", head1: "Indica" },
    { imgUrl: "./image/Leafly Promo.png", head1: "Hybrid" },
    { imgUrl: "./image/Leafly Promo.png", head1: "Sativa" },
]
const strainHeading="Strain type"
  const popularStrainHeading="Popular strain"
    return(
        <div className="container-fluid">
          <PopularStrain SliderDataArray={PopularStrainArray} Heading={popularStrainHeading}/>
         <StrainType ArrayData={StrainTypeCardArray} Heading={strainHeading}/>
           <div className="row">
            <div className="col-12">
              <h1 className="strainPopular_heading">Popular strains products</h1>
            </div>

           </div>
           <Footer/>
        </div>
    )
}
export default Strain