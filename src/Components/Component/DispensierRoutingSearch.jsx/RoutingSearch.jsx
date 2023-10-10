import React from 'react'
import Createcontext from "../../../Hooks/Context"
export default function RoutingSearch(value) {
    const { state, dispatch } = React.useContext(Createcontext)
     console.log(state , value)
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
    // .then(res => res.json())
    // .then(response => {
    //   dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
    //   response?.results[0]?.address_components?.map((data) => {
    //     if (data.types.indexOf('country') !== -1) {
    //       dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
    //     }
    //     if (data.types.indexOf('administrative_area_level_1') !== -1) {
    //       if (data.types.indexOf('administrative_area_level_1') !== -1) {
    //         dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
    //       }
    //     }
    //     if (data.types.indexOf('administrative_area_level_3') !== -1) {
    //       if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
    //         dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })

    //       }
    //     }
    //   })
    // }).catch((error) => {
    // })
}
