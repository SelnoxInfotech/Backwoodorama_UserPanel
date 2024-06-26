import { Helmet } from "react-helmet-async"

function HomePageSco({location  }) {
    return (
        <Helmet>
            <title>{"Marijuana Dispensaries & Delivery Near Me | weedx.io |"}</title>
            <meta name="title" content={`Marijuana Dispensaries & Delivery Near Me | weedx.io |`}/>
            <meta name='description' content={" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you"} />
            <link rel="canonical" href={`https://www.weedx.io${location}`} /> 
            <meta itemprop="name" content="WeedX" />
            <meta itemprop="description" content=" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you" />
            <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"></meta>
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta property="og:description" content={" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you"} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta name="twitter:description" content={" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you"} />
        </Helmet>
    )
}
export { HomePageSco }
