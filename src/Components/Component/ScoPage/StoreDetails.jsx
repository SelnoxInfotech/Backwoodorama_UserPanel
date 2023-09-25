import { Helmet } from "react-helmet-async"

function StoreDetails({MetaTag}) {
    return (
        <Helmet>
            <title>{MetaTag.title}</title>
            <meta name="title" content={`Marijuana Dispensaries & Delivery Near Me | weedx.io |`}/>
            <meta name='description' content={MetaTag.discription} />
            
            <meta itemprop="name" content="WeedX" />
            <meta itemprop="description" content={MetaTag.discription} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={MetaTag.title} />
            <meta property="og:description" content={MetaTag.discription} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={MetaTag.title} />
            <meta name="twitter:description" content={MetaTag.discription} />
        </Helmet>
    )
}
export { StoreDetails }
