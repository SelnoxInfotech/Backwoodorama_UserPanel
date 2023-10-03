import { Helmet } from "react-helmet-async"

function NewsSeo() {
    return (
        <Helmet>
            <title>{"Today's Latest Cannabis and Marijuana News | weedx.io"}</title>
            <meta name="title" content={`Today's Latest Cannabis and Marijuana News | weedx.io`}/>
            <meta name='description' content={" Weedx.io: Your trusted source for the latest cannabis industry news, updates, trends, and insights. Discover breaking stories and expert analysis here."} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={"Today's Latest Cannabis and Marijuana News | weedx.io"} />
            <meta property="og:description" content={" Weedx.io: Your trusted source for the latest cannabis industry news, updates, trends, and insights. Discover breaking stories and expert analysis here."} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={"Today's Latest Cannabis and Marijuana News | weedx.io"} />
            <meta name="twitter:description" content={" Weedx.io: Your trusted source for the latest cannabis industry news, updates, trends, and insights. Discover breaking stories and expert analysis here."} />
        </Helmet>
    )
}
function SingleNewsSeo({Title ,Description}) {
    
    return (
        <Helmet>
            <title>{`${Title} | weedx.io`}</title>
            <meta name="title" content={`${Title} | weedx.io`}/>
            <meta name='description' content={Description} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={`${Title} | weedx.io`} />
            <meta property="og:description" content={Description} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={`${Title} | weedx.io`} />
            <meta name="twitter:description" content={Description} />
        </Helmet>
    )
}
export {NewsSeo ,SingleNewsSeo}
