import { Helmet } from "react-helmet-async"

function LearnSeo() {
    return (
        <Helmet>
            <title>{"Learn everything about you favorite Cannabis | weedx.io |"}</title>
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
function Law() {
    return (
        <Helmet>
            <title>{"Learn About Laws and Regulation in U.S. States | weedx.io |"}</title>
            <meta name='description' content={" Select a state or country to learn about recreational and medical cannabis laws and regulation in the US and its states. Read on to find a weed marijuana dispensary and delivery near you."} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={"Learn About Laws and Regulation in U.S. States | weedx.io |"} />
            <meta property="og:description" content={" Select a state or country to learn about recreational and medical cannabis laws and regulation in the US and its states. Read on to find a weed marijuana dispensary and delivery near you."} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Learn About Laws and Regulation in U.S. States | weedx.io |"} />
            <meta name="twitter:description" content={" Select a state or country to learn about recreational and medical cannabis laws and regulation in the US and its states. Read on to find a weed marijuana dispensary and delivery near you."} />
        </Helmet>
    )
}
export { LearnSeo,Law }
