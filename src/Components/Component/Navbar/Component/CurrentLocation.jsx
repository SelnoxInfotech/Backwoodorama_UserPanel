import React from "react";
import Geocode from "react-geocode";
import Createcontext from "../../../../Hooks/Context"


const CurrentLocation = () => {

    const { state, dispatch } = React.useContext(Createcontext)
    const [LocationArry, SetLocationArry] = React.useState([])
    return (
        React.useEffect( () => {
            Geocode.setApiKey("AIzaSyB4vl80GbjoLGawT757RmLx5f2DlOED0Zo");
            Geocode.enableDebug();
            const location = window.navigator && window.navigator.geolocation
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position)
            });
            if (location) {
                location.getCurrentPosition( (position) => {
                     Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                        response => {
                            dispatch({ type: 'Location', Location: [{ label: response?.plus_code?.compound_code.slice(9)}] })                            ;
                            const p = []
                    
                                response?.results?.map((data) => {

        
                                    if (data.formatted_address !== response?.plus_code?.compound_code.slice(9)) {


                                        return  p.push({ key: p.length + 1, label: data.formatted_address, lat: data.geometry.location.lat, lng: data.geometry.location.lng })
                                    }
                            

                                });
                            dispatch({ type: 'LocationData', LocationData: p })



                        },

                        error => {
                            console.error(error);
                        }
                    );

                })
            }
            // console.log(LocationArry)

        }, [])


    )
}

export default CurrentLocation