import { Helmet } from "react-helmet-async"


function Faqseo() {
    return (
        <Helmet>
            <title>{"Faq | weedx.io |"}</title>
            <meta name="title" content={`Learn everything about you favorite Cannabis | weedx.io |`}/>
            <meta name='description' content={"FAQs of WeedX.Io for insights on cannabis orders, shipping, compliance, and more. Find the best Recreational and Medical Marijuana Dispensaries & Delivery Near you."} />
            <link rel="canonical" href={`https://www.weedx.io`} /> 
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

export {Faqseo}