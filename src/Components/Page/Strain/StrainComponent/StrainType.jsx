import SearchBar from '@mkyy/mui-search-bar';
import * as React from 'react';
import StrainTypeCards from "./StrainTypeCards";
import Axios from "axios"

const StrainType = () => {
    const [type, SetType] = React.useState([{
        type: "Strain"
    }])
    const StrainTypeCardArray = [
        { imgUrl: "./image/indica.png", head1: "Indica" },
        { imgUrl: "./image/sativa.png", head1: "Hybrid" },
        { imgUrl: "./image/social.png", head1: "Sativa" },
        { imgUrl: "./image/Leafly March Promo.png", head1: "Indica" },
        { imgUrl: "./image/Leafly Promo.png", head1: "Hybrid" },
        { imgUrl: "./image/Leafly Promo.png", head1: "Sativa" },
    ]
    // React.useEffect(() => {
    //     Axios.post("http://backend.sweede.net/UserPanel/Get-StrainType/",
    //     {"type":"Indica"})
    //     .then((response)=>{
    //     })
    //     .catch((error)=>{
    //     })
    // }, [])
    return (
        <>
            <div className="row my-3">
                <div className="col-sm-4 strainType_heading">
                    <h1 className="mx-2">Strain Type</h1>
                </div>
                <div className="col-sm-8 px-2">
                    <SearchBar style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Serch Strain Type" />

                </div>

            </div>
            <StrainTypeCards ArrayData={StrainTypeCardArray} />
        </>
    )
}
export default StrainType