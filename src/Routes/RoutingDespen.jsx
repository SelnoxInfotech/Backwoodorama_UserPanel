
import React from "react"
import Createcontext from "../Hooks/Context"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
export default function RoutingDespen(props) {
    const params = useParams()
    const { Component } = props;

    const [L, Set] = React.useState('')
    const [s, Set1] = React.useState('')
    const [c, Set2] = React.useState('')
    console.log(params , params?.city === undefined)
    React.useEffect(() => {
        if (params?.city === undefined) {
            if (params.Country !== undefined) {
                Set(params?.Country)
            }
            if (params?.state !== undefined) {
                Set1(params?.state)
            }
        }

    }, [])

    return (

        <div>
            <Component />
            {
                L !== "" && <CurrentLocation Country={L} State1={L + " " + s}></CurrentLocation>
            }
        </div>
    )
}