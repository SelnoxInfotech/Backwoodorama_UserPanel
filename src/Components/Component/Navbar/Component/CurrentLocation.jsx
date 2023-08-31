import React from "react";
import Createcontext from "../../../../Hooks/Context"


const CurrentLocation = () => {

    const { dispatch } = React.useContext(Createcontext)
    return (
        React.useEffect(() => {
            navigator.geolocation.getCurrentPosition(function (position) {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
                    .then(res => res.json())
                    .then(response => {
                        dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) })
                        response?.results?.map((data) => {
                          if (data.types.indexOf('country') !== -1) {
                            dispatch({ type: 'Country', Country: data?.formatted_address.replace(/\s/g, '-') })
                         }
                         if (data.types.indexOf('administrative_area_level_1') !== -1) {
                           data.address_components.map((state) => {
                             if (state.types.indexOf('administrative_area_level_1') !== -1) {
                               dispatch({ type: 'State', State: state?.long_name.replace(/\s/g, '-') })
                             }
                           })
                         }
                         if (data.types.indexOf('administrative_area_level_3') !== -1) {
                           data.address_components.map((city) => {
                             if (city.types.indexOf('administrative_area_level_3') !== -1 || city.types.indexOf('locality') !== -1) {
                               dispatch({ type: 'City', City: city?.long_name?.replace(/\s/g, '-') })
                             }
                           })
             
                         }
             
                
                          })
                    })
            });
        }, [])



    )
}

export default CurrentLocation