import React from "react";
import Createcontext from "../../../../Hooks/Context"


const CurrentLocation = () => {

    const { dispatch } = React.useContext(Createcontext)
    return (
        React.useEffect(() => {
            navigator.geolocation.getCurrentPosition(function (position) {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
                    .then(res => res.json())
                    .then(response => dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) }))
            });



        }, [dispatch])



    )
}

export default CurrentLocation