
import React ,{Suspense} from "react"
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
import Createcontext from "../Hooks/Context";
import Cookies from "universal-cookie";
export default function RoutingList(props) {
    const { Component } = props;
    const { state } = React.useContext(Createcontext)

    return (
        <div>
            <Suspense fallback={"Loading"}>
            <Component />
         
            
       { state.permission===false && <CurrentLocation></CurrentLocation> }
            </Suspense>
        </div>
    )
}