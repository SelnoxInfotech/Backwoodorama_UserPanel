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


function TermsAndConditions() {
    return (
        <Helmet>
            <title>{` Terms And Conditions - weedx.io | `}</title>
            <meta name="title" content={` Terms And Conditions - weedx.io | `}/>
            <meta name='description' content={`Terms & Conditions weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed. `} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={` Terms And Conditions - weedx.io | `} />
            <meta property="og:description" content={`Terms & Conditions weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed. `} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={` Terms And Conditions - weedx.io | `} />
            <meta name="twitter:description" content={`Terms & Conditions weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed. `} />
        </Helmet>
    )
}
function PrivacyPolicy() {
    return (
        <Helmet>
            <title>{`Privacy And Policy - weedx.io |`}</title>
            <meta name="title" content={` Privacy And Policy - weedx.io |`}/>
            <meta name='description' content={`Privacy And Policy weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed`} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={` Privacy And Policy - weedx.io |`} />
            <meta property="og:description" content={`Privacy And Policy weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed`} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={` Privacy And Policy - weedx.io |`} />
            <meta name="twitter:description" content={`Privacy And Policy weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed`} />
        </Helmet>
    )
}
function CookiesPolicy() {
    return (
        <Helmet>
            <title>{`Cookies Policy | weedx.io`}</title>
            <meta name="title" content={` Cookies Policy | weedx.io`}/>
            <meta name='description' content={`Cookies Policy weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed. `} />
            {/* Facebook tags */}
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={` Cookies Policy | weedx.io`} />
            <meta property="og:description" content={`Cookies Policy weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed. `} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={"website"} />
            <meta name="twitter:card" content={"Marijuana Dispensaries & Delivery Near Me"} />
            <meta name="twitter:title" content={` Cookies Policy | weedx.io`} />
            <meta name="twitter:description" content={`Cookies Policy weedx.io. Recreational and Medical Marijuana Dispensaries & Delivery Near you. Explore the best dispensary and get the best weed. `} />
        </Helmet>
    )
}
export {AboutusSeo , TermsAndConditions ,PrivacyPolicy , CookiesPolicy}