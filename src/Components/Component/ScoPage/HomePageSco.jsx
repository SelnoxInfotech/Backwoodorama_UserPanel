import { Helmet } from "react-helmet-async"

function HomePageSco() {
    return (
        <Helmet>
            <title>{"Marijuana Dispensaries & Delivery Near Me | weedx.io |"}</title>
            <meta name="title" content={`Marijuana Dispensaries & Delivery Near Me | weedx.io |`}/>
            <meta name='description' content={" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you"} />
            
            <meta itemprop="name" content="WeedX" />
            <meta itemprop="description" content=" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you" />
            {/* Facebook tags */}
            <meta property="og:type" content={"Marijuana"} />
            <meta property="og:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta property="og:description" content={" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you"} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"Marijuana"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Marijuana Dispensaries & Delivery Near Me | weedx.io |"} />
            <meta name="twitter:description" content={" In weedx.io, find high quality Recreational and Medical Marijuana Dispensaries & Delivery Near you. Order online and get best deals on your weed near you"} />
        </Helmet>
    )
}
export { HomePageSco }
