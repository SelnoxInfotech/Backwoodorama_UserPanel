import { Helmet } from 'react-helmet-async';
import React from "react"
import { useLocation, useParams } from "react-router-dom"
function ProductDetailsSeo({Productname , ProductCategory , StoreName ,  City , State}) {
    return (
        <Helmet>
            <title> {`${Productname}| Weedx.io | `}</title>
            <meta name="title" content={`${Productname}| Weedx.io |`}/>
            <meta name='description' content={`${Productname} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
            {/* Facebook tags */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={`${Productname}| Weedx.io |`} />
            <meta property="og:description" content={`${Productname} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"website Dispensaries & `Delivery` Near Me"} />
            <meta name="twitter:title" content={`${Productname}| Weedx.io |`} />
            <meta name="twitter:description" content={`${Productname} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
        </Helmet>
    )
}


function Product() {
    return (
       
        <Helmet>
       <title>{"Learn everything about you favorite Cannabis | weedx.io |"}</title>
            <meta name="title" content={`Learn everything about you favorite Cannabis | weedx.io |`}/>
            <meta name='description' content={"Learn everything about your favorite Cannabis. Read this guide on weedx.io to understand the laws related to marijuana and about its legalization worldwide."} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={"Learn everything about you favorite Cannabis | weedx.io |"} />
            <meta property="og:description" content={"Learn everything about your favorite Cannabis. Read this guide on weedx.io to understand the laws related to marijuana and about its legalization worldwide."} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Learn everything about you favorite Cannabis | weedx.io |"} />
            <meta name="twitter:description" content={"Learn everything about your favorite Cannabis. Read this guide on weedx.io to understand the laws related to marijuana and about its legalization worldwide."} />
    </Helmet>
    )
}




export  {ProductDetailsSeo } 
