import SearchBar from '@mkyy/mui-search-bar';
import * as React from 'react';
import StrainTypeCards from "./StrainTypeCards";
import useStyles from '../../../../Style';
const StrainType = () => {
 const classes=useStyles()


    const StrainTypeCardArray = [
        { imgUrl: "https://selnoxmedia.s3.amazonaws.com/media/BlankImage/indica.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T090918Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4c28a3adb36c3f61fbbd7551f965514f74d404d40c36cac42d3d76fd4404ea69", head1: "Indica" },
        { imgUrl: "https://selnoxmedia.s3.amazonaws.com/media/BlankImage/sativa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T091130Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=23e193927953ad4862ffa8f9c157442bb5afedeec7893c80d861f203c6e9d839", head1: "Hybrid" },
        { imgUrl: "https://selnoxmedia.s3.amazonaws.com/media/BlankImage/social.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T091058Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=457b11d9d223deea87d93a1c4159483ac9979c96d3414d4654e47c869fde5ea6", head1: "Sativa" },
        { imgUrl: "https://selnoxmedia.s3.amazonaws.com/media/BlankImage/cbd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T090828Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9c55dc2db354529e54a43af9b3be7a94004f61f36355421a6261d8e64f253e04", head1: "CBD" },
        // { imgUrl: "./image/Leafly Promo.png", head1: "Hybrid" },
        // { imgUrl: "./image/Leafly Promo.png", head1: "Sativa" },
    ]
    // React.useEffect(() => {
    //     Axios.post("https://api.cannabaze.com/UserPanel/Get-StrainType/",
    //     {"type":"Indica"})
    //     .then((response)=>{
    //     })
    //     .catch((error)=>{
    //     })
    // }, [])
    return (
        <React.Fragment>
            <div className="row my-3 mx-0 px-0">
                <div className="col-sm-4  px-0">
                    <h2 className="strainType_heading">Strain Type</h2>
                </div>
                <div className="col-sm-8 px-0">
                    <SearchBar style={{ background: "#FFFFF", border: "1px solid #31B665" }}  width={"100%"} className={`${classes.strainTypSearchBar} ${classes.strainTyleRemove}`} placeholder="Serch Strain Type" />

                </div>

            </div>
            <StrainTypeCards ArrayData={StrainTypeCardArray} />
        </React.Fragment>
    )
}
export default StrainType