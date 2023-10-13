
import React, { Suspense } from "react"
import Createcontext from "../Hooks/Context"
import { useParams, useLocation } from "react-router-dom";
import RoutingSearch from "../Components/Component/DispensierRoutingSearch/RoutingSearch";
// import x  from "../../public/Sitemap/sitemapbrand.xml"
 import fs from "fs"
var XMLParser = require('react-xml-parser');
export default function RoutingDespen(props) {
    const [xmlData, setXmlData] = React.useState([]);
    const { state } = React.useContext(Createcontext)
    const params = useParams()
    const Location = useLocation()
    const { Component } = props;
    // React.useEffect(() => {
    //     fetch('/Sitemap/sitemapbrand.xml')
    //         .then((res) => res.text())
    //         // .then(xmlstring =>  window.domparser().parsefromstring(xmlstring, "text/xml"))
    //         .then(data => {
    //             var xml = new XMLParser().parseFromString(data);   
    //               const l  = xml.children.map((data)=> data.children.map((name)=> name.value))
    //             // Assume xmlText contains the example XML
    //          const k =  l.map((data)=>  data[0])
    //          setXmlData(k)
    //             //    k.map((data)=>{
    //             //    })  
                  
    //             // fs.writeFile('../public/Sitemap/Sitemaplocation.xml', data);
    //             // fs.writeFileSync("../public/Sitemap/Sitemaplocation.xml", data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [])
    // console.log(state)

    return (

        <div>
            <Suspense fallback={"Loading"}>
                <Component />
                {((state.permission === false) && (params?.city?.toLowerCase() !== state?.City?.toLowerCase() || params?.state?.toLowerCase() !== state?.State?.toLowerCase() || params?.Country?.toLowerCase() !== state?.Country?.toLowerCase())) && <RoutingSearch city={params.city} State={params.state} country={params.Country}
                    pathname={Location.pathname.slice(0, 18) === '/weed-dispensaries' ? "/weed-dispensaries" : "/weed-deliveries"}
                ></RoutingSearch>}
            </Suspense>
        </div>
    )
}