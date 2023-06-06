import React from "react";
import Createcontext from "../../../../Hooks/Context"


const CurrentLocation = () => {

    const {dispatch } = React.useContext(Createcontext)
    return (
        React.useEffect(() => {
            console.log("hjjjjjjjj")

            navigator.geolocation.getCurrentPosition(function (position) {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyB4vl80GbjoLGawT757RmLx5f2DlOED0Zo"}`)
                    .then(res => res.json())
                    .then(response => dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) }))
            });

   

        }, [])
  


    )
}

export default CurrentLocation