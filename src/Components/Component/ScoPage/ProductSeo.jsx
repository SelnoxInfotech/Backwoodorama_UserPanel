import { Helmet } from 'react-helmet-async';
import React from "react"
import { useLocation } from "react-router-dom"
function ProductDetailsSeo({Productname ,Productnm, ProductCategory , StoreName ,  City , State ,location , robot}) {
    return (
        <Helmet>
            <title> {`${Productname}  `}</title>
            <meta name="title" content={`${Productname}`}/>
            <meta name='description' content={`${Productnm} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
           <link rel="canonical" href={`https://www.weedx.io${location}`} /> 
           <meta name="robots" content={robot}></meta>
            {/* Facebook tags */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={`${Productname}`} />
            <meta property="og:description" content={`${Productnm} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"website Dispensaries & `Delivery` Near Me"} />
            <meta name="twitter:title" content={`${Productname}`} />
            <meta name="twitter:description" content={`${Productnm} - ${ProductCategory} at ${StoreName} - Your Ultimate Cannabis ${useLocation().pathname.slice(0, 16) === "/weed-deliveries" ? `Delivery` : `Dispensary`} in ${City}, ${State}.`} />
        </Helmet>
    )
}


function ProductSeo({location}) {
    return (
       
        <Helmet>
       <title>{"Shop High-Quality Marijuana products Near You | weedx.io |"}</title>
            <meta name="title" content={`Shop High-Quality Marijuana products Near You | weedx.io |`}/>
            <meta name='description' content={"Shop High-Quality Marijuana products from top brands near you. Recreational and Medical Marijuana Dispensaries & Delivery Near me. Order online from weedx.io"} />
            <link rel="canonical" href={`https://www.weedx.io${location}`} /> 
            <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"></meta>
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={"Shop High-Quality Marijuana products Near You | weedx.io |"} />
            <meta property="og:description" content={"Shop High-Quality Marijuana products from top brands near you. Recreational and Medical Marijuana Dispensaries & Delivery Near me. Order online from weedx.io"} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Shop High-Quality Marijuana products Near You | weedx.io |"} />
            <meta name="twitter:description" content={"Shop High-Quality Marijuana products from top brands near you. Recreational and Medical Marijuana Dispensaries & Delivery Near me. Order online from weedx.io"} />
    </Helmet>
    )
}

function ProductCategorySeo({categoryname , location}) {
    return (
       
        <Helmet>
       <title>{`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`}</title>
            <meta name="title" content={`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`}/>
            <meta name='description' content={` weedx.io best place to find your favorite Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You. Explore different strains from different brands with different deals and offers.`} />
            <link rel="canonical" href={`https://www.weedx.io${location}`} /> 
            <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"></meta>
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`} />
            <meta property="og:description" content={` weedx.io best place to find your favorite Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You. Explore different strains from different brands with different deals and offers.`} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={`Find Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You | weedx.io |`} />
            <meta name="twitter:description" content={` weedx.io best place to find your favorite Cannabis ${categoryname.charAt(0).toUpperCase() + categoryname.slice(1)} Near You. Explore different strains from different brands with different deals and offers.`} />
    </Helmet>
    )
}





export  {ProductDetailsSeo  , ProductSeo , ProductCategorySeo} 
