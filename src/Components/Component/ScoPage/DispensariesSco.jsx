import { Helmet } from 'react-helmet-async';
import Createcontext from "../../../Hooks/Context"
import React from "react"
function DispensariesSco({location}) {
    const { state } = React.useContext(Createcontext)
    return (
        <Helmet>
            <title>{` Weed Dispensaries in ${state?.Location?.replace(/-/g, " ")}| weedx.io |`}</title>
            <meta name="title" content={` Weed Dispensaries in ${state?.Location?.replace(/-/g, " ")}| weedx.io |`}/>
            <meta name='description' content={`Find Nearby Dispensaries in ${state?.Location} for Recreational & Medical weed. Browse Top Cannabis Products and Place Orders from Trusted Local Dispensaries.`} />
            <link rel="canonical" href={`https://www.weedx.io/${location}`} /> 
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta property="og:description" content={"In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you."} />
            <meta property="og:image" content="./logo192.webp"></meta>
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta name="twitter:description" content={"In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you."} />
       
        </Helmet>
    )
}

export { DispensariesSco }
