import StrainType from "./StrainComponent/StrainType"
import PopularStrain from "./StrainComponent/PopularStrain"
const Strain=()=>{
    return(
        <div className="container-fluid">
          <PopularStrain/>
         <StrainType/>
           <div className="row">
            <div className="col-12">
              <h1 className="strainPopular_heading">Popular strains Products</h1>
            </div>

           </div>
        </div>
    )
}
export default Strain