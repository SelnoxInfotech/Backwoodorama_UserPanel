import VerifyBrands from "./BrandComponent/VerifyBrands"
const Brand=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row center brands_containers_height">
                <div className="col-10 brandHeading">
                    <h1>Verify Brands</h1>
                    <VerifyBrands/>
                </div>

            </div>

        </div>
        </>
    )
}
export default Brand