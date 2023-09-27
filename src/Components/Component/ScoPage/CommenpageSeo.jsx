import { Helmet } from "react-helmet-async"

function AboutusSeo() {
    return (
        <Helmet>
            <title>{` About Us-weedx.io | Weed Dispensary & Delivery Near Me | `}</title>
            <meta name="title" content={` About Us-weedx.io | Weed Dispensary & Delivery Near Me | `}/>
            <meta name='description' content={`weedx.io discover cannabis products and order them from best delivery and dispensary services near you. Explore the best dispensary and get the best weed`} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={` About Us-weedx.io | Weed Dispensary & Delivery Near Me | `} />
            <meta property="og:description" content={`weedx.io discover cannabis products and order them from best delivery and dispensary services near you. Explore the best dispensary and get the best weed`} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={` About Us-weedx.io | Weed Dispensary & Delivery Near Me | `} />
            <meta name="twitter:description" content={`weedx.io discover cannabis products and order them from best delivery and dispensary services near you. Explore the best dispensary and get the best weed`} />
        </Helmet>
    )
}

export {AboutusSeo}