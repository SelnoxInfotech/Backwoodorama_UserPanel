import React from 'react'
import Createcontext from "../../../Hooks/Context"
import { useNavigate } from 'react-router-dom'
export default function RoutingSearch({ city, State, country, pathname, route }) {
  const { state, dispatch } = React.useContext(Createcontext)
  const navigate = useNavigate()
  React.useEffect(() => {
    if (route !== undefined) {
      location(route + " " + city + " " + State + " " + country, "route")
    }
    else {
      if (city === undefined) {
        if (State !== undefined) {
          location(State + " " + country, "state")
        }
        else {
          location(country, "Country")
        }
      }
      else {
        location(city + " " + State + " " + country, "city")
      }
    }
    dispatch({ type: 'permission', permission: true })
  }, [])


  async function location(value, type) {
    // var ci, sta, Coun , route;    
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
      .then(res => res.json())
      .then(async response => {
        var Coun;
        var sta;
        var ci;
        var route;
        if (response?.error_message) {
          dispatch({ type: 'Location', Location: 'New York, NY, USA' })
          dispatch({ type: 'Country', Country: "United-States" })
          dispatch({ type: 'State', State: 'New-York' })
          dispatch({ type: 'City', City: "New-York" })
        }
        else {
          if (response?.results?.length !== 0) {
            await dispatch({ type: 'permission', permission: true });
            await dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
            const firstResult = response.results[0];
            const addressComponents = firstResult.address_components || [];

            const locationPromises = addressComponents.map(async (data) => {
              switch (true) {
                case data.types.includes('country'):
                  Coun = data.long_name.replace(/\s/g, '-');
                  await dispatch({ type: 'Country', Country: Coun });
                  break;
                case data.types.includes('administrative_area_level_1'):
                  sta = data.long_name.replace(/\s/g, '-');
                  await dispatch({ type: 'State', State: sta });
                  break;
                case data.types.includes('locality') || data.types.includes('administrative_area_level_3') || data.types.includes('postal_town') || data.types.includes('sublocality'):
                  ci = data.long_name.replace(/\s/g, '-');
                  await dispatch({ type: 'City', City: ci })
                  break;
                case data.types.includes('route') || data.types.includes('sublocality_level_2') || data.types.includes('establishment'):
                  route = data.long_name.replace(/\s/g, '-');
                  await dispatch({ type: 'route', route: route });
                  break;
                case !ci && (data.types.includes('administrative_area_level_2') || data.types.includes('political')):
                  ci = data.long_name.replace(/\s/g, '-');
                  await dispatch({ type: 'City', City: ci });
                  break;
              }
            });

            await Promise.all(locationPromises);
          }
          else {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${type === 'city' ? city + " " + State + " " + country : type === "state" && country}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
              .then(res => res.json())
              .then(response => {
                if (response?.results?.length !== 0) {
                  dispatch({ type: 'permission', permission: true })
                  dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
                  response?.results[0]?.address_components?.map((data) => {
                    if (data.types.indexOf('country') !== -1) {
                      dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
                      Coun = data?.long_name.replace(/\s/g, '-')
                    }
                    if (data.types.indexOf('administrative_area_level_1') !== -1) {
                      if (data.types.indexOf('administrative_area_level_1') !== -1) {
                        dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                        sta = data?.long_name.replace(/\s/g, '-')
                      }
                    }
                    if (data.types.indexOf('administrative_area_level_3') !== -1) {
                      if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                        dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
                        ci = data?.long_name.replace(/\s/g, '-')

                      }
                    }

                  })
                  if (ci !== undefined && sta !== undefined && Coun !== undefined) {

                    navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/${sta.toLowerCase()}/${ci.toLowerCase()}/`)
                  }
                  else {
                    if (sta !== undefined && Coun !== undefined) {
                      navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/${sta.toLowerCase()}/`)
                    }
                    else {
                      if (Coun !== undefined) {
                        navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/`)
                      }

                    }
                  }
                }
                else {
                  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
                    .then(res => res.json())
                    .then(response => {
                      if (response.results.length !== 0) {
                        dispatch({ type: 'permission', permission: true })
                        dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
                        response?.results[0]?.address_components?.map((data) => {
                          if (data.types.indexOf('country') !== -1) {
                            dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
                            Coun = data?.long_name.replace(/\s/g, '-')
                          }
                          if (data.types.indexOf('administrative_area_level_1') !== -1) {
                            if (data.types.indexOf('administrative_area_level_1') !== -1) {
                              dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                              sta = data?.long_name.replace(/\s/g, '-')
                            }
                          }
                          if (data.types.indexOf('administrative_area_level_3') !== -1) {
                            if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                              dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
                              ci = data?.long_name.replace(/\s/g, '-').toLowerCase()

                            }
                          }

                        })



                        if (ci !== undefined && sta !== undefined && Coun !== undefined) {

                          navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/${sta.toLowerCase()}/${ci.toLowerCase()}/`)
                        }
                        else {
                          if (sta !== undefined && Coun !== undefined) {
                            navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/${sta.toLowerCase()}/`)
                          }
                          else {
                            if (Coun !== undefined) {
                              navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/`)
                            }

                          }
                        }
                      }
                      else {
                        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${"new-york"}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
                          .then(res => res.json())
                          .then(response => {
                            dispatch({ type: 'permission', permission: true })
                            dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
                            response?.results[0]?.address_components?.map((data) => {
                              if (data.types.indexOf('country') !== -1) {
                                dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
                                Coun = data?.long_name.replace(/\s/g, '-')
                              }
                              if (data.types.indexOf('administrative_area_level_1') !== -1) {
                                if (data.types.indexOf('administrative_area_level_1') !== -1) {
                                  dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                                  sta = data?.long_name.replace(/\s/g, '-')
                                }
                              }
                              if (data.types.indexOf('administrative_area_level_3') !== -1) {
                                if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                                  dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
                                  ci = data?.long_name.replace(/\s/g, '-')

                                }
                              }

                            })
                            if (ci !== undefined && sta !== undefined && Coun !== undefined) {

                              navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/${sta.toLowerCase()}/${ci.toLowerCase()}/`)
                            }
                            else {
                              if (sta !== undefined && Coun !== undefined) {
                                navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/${sta.toLowerCase()}/`)
                              }
                              else {
                                if (Coun !== undefined) {
                                  navigate(pathname + `/${'in'}/${Coun.toLowerCase()}/`)
                                }

                              }
                            }

                          }
                          ).catch((error) => {
                            console.trace(error)
                          })

                      }
                    }
                    ).catch((error) => {
                      console.trace(error)
                    })
                }
              }
              ).catch((error) => {
                console.trace(error)
              })

          }
        }

      }
      ).catch((error) => {
        console.trace(error)
      })
  }

} 
