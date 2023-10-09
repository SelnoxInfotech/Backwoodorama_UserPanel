
import React ,{Suspense} from "react"
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
import Createcontext from "../Hooks/Context";
import Cookies from "universal-cookie";
export default function RoutingList(props) {
    const { Component } = props;
    const { state } = React.useContext(Createcontext)
    const cookies = new Cookies()




    return (
        <div>
            <Suspense fallback={"Loading"}>
            <Component />
            </Suspense>
           { cookies.get("Location")!==undefined && state?.Country ==='' &&<CurrentLocation Country={state?.Country}></CurrentLocation> }
        </div>
    )
}