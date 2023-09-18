import React from "react";
import Createcontext from "../../../../Hooks/Context"
import Cookies from 'universal-cookie';
const CurrentLocation = ({ Country, State1, city }) => {
  const { dispatch } = React.useContext(Createcontext)
  const cookies = new Cookies();
  return (
    React.useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        function(position) { /** won't be executed for such short timeout */  console.log( position)},
        function(positionError , success) {
            
          switch (positionError.code) {
          // PERMISSION_DENIED
          case 1:
            if (Country === '') {
              fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cookies.get("Location") ? cookies.get("Location") : "New York"}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
                .then(res => res.json())
                .then(response => {
                  dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
                  response?.results[0]?.address_components?.map((data) => {
                    if (data.types.indexOf('country') !== -1) {
                      dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
                    }
                    if (data.types.indexOf('administrative_area_level_1') !== -1) {
                      if (data.types.indexOf('administrative_area_level_1') !== -1) {
                        dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                      }
                    }
                    if (data.types.indexOf('administrative_area_level_3') !== -1) {
                      if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                        dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })

                      }
                    }
                  })
                }).catch((error) => {
                  console.log(error)
                })
            }
             else {
              if (State1 !== "") {
                if (city !== "") {
                  dispatch({ type: 'Location', Location: Country + "" + State1 + "" + city })
                  dispatch({ type: 'Country', Country: Country })
                  dispatch({ type: 'State', State: State1 })
                  dispatch({ type: 'City', City: city })
                }
                else {
                  dispatch({ type: 'Location', Location: Country + State1 })
                  dispatch({ type: 'Country', Country: Country })
                  dispatch({ type: 'State', State: State1 })
                }
              }
              else {

                dispatch({ type: 'Location', Location: Country })
                dispatch({ type: 'Country', Country: Country })
              }
            }
      
         break
          case 2:
            console.log('Permission allowed, location disabled')
            break
          // TIMEOUT
          case 3:
            console.log('Permission allowed, timeout reached')
            if (Country === '' || Country === undefined) {
              // navigator.geolocation.getCurrentPosition(function (position) {
                // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${positionError.coords.latitude},${positionError.coords.longitude}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
                //   .then(res => res.json())
                //   .then(response => {
                //     dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) })
                //     response?.results?.map((data) => {
                //       if (data.types.indexOf('country') !== -1) {
                //         dispatch({ type: 'Country', Country: data?.formatted_address.replace(/\s/g, '-') })
                //       }
                //       if (data.types.indexOf('administrative_area_level_1') !== -1) {
                //         data.address_components.map((state) => {
                //           if (state.types.indexOf('administrative_area_level_1') !== -1) {
                //             dispatch({ type: 'State', State: state?.long_name.replace(/\s/g, '-') })
                //           }
                //         })
                //       }
                //       if (data.types.indexOf('administrative_area_level_3') !== -1) {
                //         data.address_components.map((city) => {
                //           if (city.types.indexOf('administrative_area_level_3') !== -1 || city.types.indexOf('locality') !== -1) {
                //             dispatch({ type: 'City', City: city?.long_name?.replace(/\s/g, '-') })
                //           }
                //         })
                //       }
                //     })
                //   })

              // });
            }
            else {
              if (State1 !== "") {
                if (city !== "") {
                  dispatch({ type: 'Location', Location: Country + "" + State1 + "" + city })
                  dispatch({ type: 'Country', Country: Country })
                  dispatch({ type: 'State', State: State1 })
                  dispatch({ type: 'City', City: city })
                }
                else {
                  dispatch({ type: 'Location', Location: Country + State1 })
                  dispatch({ type: 'Country', Country: Country })
                  dispatch({ type: 'State', State: State1 })
                }
              }
              else {

                dispatch({ type: 'Location', Location: Country })
                dispatch({ type: 'Country', Country: Country })
              }
            }

            break
          }
        },
        {timeout: 0}
      )
      // if (navigator?.geolocation) {
      //   console.log('dis')
        // navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
        //   if (permissionStatus.state === 'denied') {
          
        //   } else {
            
        //   }
        // });
      // } else {
      //   alert('Geolocation is not supported in your browser.');
      // }


    }, [])
  )
}

export default CurrentLocation