import VerifyBrands from "./BrandComponent/VerifyBrands"
import React from "react";
const Brand=()=>{
    const [Category, SetCategory] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const apidata = await fetch("http://backend.sweede.net/UserPanel/Get-Categories/");
            const data = await apidata.json()
            SetCategory(data)
        }
        fetchData()

    }, [])
    return(
        <>
        <div className="container-fluid">
            {/* <CategoryProduct  Category={Category}/> */}
            <div className="row center brands_containers_height">
                <div className="col-12 col-sm-10 brandHeading">
                    <h1>Verify brands</h1>
                    <VerifyBrands/>
                </div>
            </div>

        </div>
        </>
    )
}
export default Brand