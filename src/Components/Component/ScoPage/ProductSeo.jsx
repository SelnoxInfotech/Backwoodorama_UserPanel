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


export  {ProductDetailsSeo } 
