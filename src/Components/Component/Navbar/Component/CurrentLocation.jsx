import React from "react";
import Geocode from "react-geocode";
import Createcontext from "../../../../Hooks/Context"


const CurrentLocation = () => {

    const { state, dispatch } = React.useContext(Createcontext)
    const [LocationArry, SetLocationArry] = React.useState([])
    return (
        React.useEffect(() => {
            Geocode.setApiKey("AIzaSyB4vl80GbjoLGawT757RmLx5f2DlOED0Zo");
            Geocode.enableDebug();
            const location = window.navigator && window.navigator.geolocation
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position)
            });
            if (location) {
                location.getCurrentPosition((position) => {
                  
                    console.log(position.coords.latitude, position.coords.longitude)
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                        response => {

                            dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(8) })
                            const address = response.results[0].formatted_address;
                            const p = []
                             response?.results?.map( async (data) => {
                                 // SetLocationArry((LocationArry) => ({ ...LocationArry, name: data.formatted_address }))
                                 p.push(    data.formatted_address)


                            });
                            dispatch({ type: 'LocationData', LocationData: p}) 
                          


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