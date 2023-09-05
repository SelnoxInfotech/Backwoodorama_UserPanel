import React from "react";
import Createcontext from "../../../../Hooks/Context"
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const CurrentLocation = () => {
  const {state, dispatch } = React.useContext(Createcontext)
  return (
    React.useEffect(() => {
      // if("geolocation" in navigator) {

      // } else {
      //    console.error("lllllll")
      // }


// state?.DefalutLocation  
      if (navigator.geolocation) {
        navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
          if (permissionStatus.state === 'denied') {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${state?.DefalutLocation ? state?.DefalutLocation  :" New York"}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
            .then(res => res.json())
            .then(response => {
              console.log(response)
              dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address})
              response?.results[0]?.address_components?.map((data) => {
                console.log(data)
                if (data.types.indexOf('country') !== -1) {
                  dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
                }
                if (data.types.indexOf('administrative_area_level_1') !== -1) {
                  // data.address_components.map((state) => {
                    if (data.types.indexOf('administrative_area_level_1') !== -1) {
                      dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                    }
                  // })
                }
                if (data.types.indexOf('administrative_area_level_3') !== -1) {
                  // data.address_components.map((city) => {
                    if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                      dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
                    }
                  // })

                }


              })
            })
          } else {
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
          }
        });
      } else {
        alert('Geolocation is not supported in your browser.');
      }
    }, [state?.DefalutLocation])



  )
}

export default CurrentLocation