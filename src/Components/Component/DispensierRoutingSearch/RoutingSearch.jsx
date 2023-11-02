import React from 'react'
import Createcontext from "../../../Hooks/Context"
import { useNavigate } from 'react-router-dom'
export default function RoutingSearch({ city, State, country, pathname  ,route}) {
  const { state, dispatch } = React.useContext(Createcontext)
  const navigate = useNavigate()
  React.useEffect(() => {

 if(route !== undefined){
  location(route, "route")
 }
 else {
  if (city === undefined) {
    if (State !== undefined) {
      location(State, "state")
    }
    else {
      location(country, "Country")
    }
  }
  else {
    location(city, "city")
  }
 }
  }, [])


  function location(value, type) {
    var SearchCity, SearchState, SearchCountry , route;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        if (response.results.length !== 0) {
          dispatch({ type: 'permission', permission: true })
          dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
          response?.results[0]?.address_components?.map((data) => {
            if (data.types.indexOf('country') !== -1) {
              dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
              SearchCountry = data?.long_name.replace(/\s/g, '-')
            }

            if (data.types.indexOf('administrative_area_level_1') !== -1) {
              dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
              SearchState = data?.long_name.replace(/\s/g, '-')
            }


            if (data.types.indexOf('locality') !== -1 || data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('sublocality') !== -1) {
              dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
              SearchCity = data?.long_name.replace(/\s/g, '-')

            }
            if (data.types.indexOf('route') !== -1) {
              route = data?.long_name.replace(/\s/g, '-')
              dispatch({ type: 'route', route: data?.long_name.replace(/\s/g, '-') })
            }


          })
          if (SearchCity !== undefined && SearchState !== undefined && SearchCountry !== undefined && route !== undefined) {

            navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/${SearchCity.toLowerCase()}/${route.toLowerCase()}`)
          }
         else if (SearchCity !== undefined && SearchState !== undefined && SearchCountry !== undefined) {

            navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/${SearchCity.toLowerCase()}/`)
          }

          else if (SearchState !== undefined && SearchCountry !== undefined) {
            navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/`)
          }
          else if (SearchCountry !== undefined) {
            navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/`)
          }


        }
        else {
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${type === 'city' ? state : type === "state" && country}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
            .then(res => res.json())
            .then(response => {
              if (response.results.length !== 0) {
                dispatch({ type: 'permission', permission: true })
                dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
                response?.results[0]?.address_components?.map((data) => {
                  if (data.types.indexOf('country') !== -1) {
                    dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
                    SearchCountry = data?.long_name.replace(/\s/g, '-')
                  }
                  if (data.types.indexOf('administrative_area_level_1') !== -1) {
                    if (data.types.indexOf('administrative_area_level_1') !== -1) {
                      dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                      SearchState = data?.long_name.replace(/\s/g, '-')
                    }
                  }
                  if (data.types.indexOf('administrative_area_level_3') !== -1) {
                    if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                      dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
                      SearchCity = data?.long_name.replace(/\s/g, '-')

                    }
                  }

                })



                if (SearchCity !== undefined && SearchState !== undefined && SearchCountry !== undefined) {

                  navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/${SearchCity.toLowerCase()}/`)
                }
                else {
                  if (SearchState !== undefined && SearchCountry !== undefined) {
                    navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/`)
                  }
                  else {
                    if (SearchCountry !== undefined) {
                      navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/`)
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
                          SearchCountry = data?.long_name.replace(/\s/g, '-')
                        }
                        if (data.types.indexOf('administrative_area_level_1') !== -1) {
                          if (data.types.indexOf('administrative_area_level_1') !== -1) {
                            dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                            SearchState = data?.long_name.replace(/\s/g, '-')
                          }
                        }
                        if (data.types.indexOf('administrative_area_level_3') !== -1) {
                          if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                            dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
                            SearchCity = data?.long_name.replace(/\s/g, '-')

                          }
                        }

                      })



                      if (SearchCity !== undefined && SearchState !== undefined && SearchCountry !== undefined) {

                        navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/${SearchCity.toLowerCase()}/`)
                      }
                      else {
                        if (SearchState !== undefined && SearchCountry !== undefined) {
                          navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/`)
                        }
                        else {
                          if (SearchCountry !== undefined) {
                            navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/`)
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
                              SearchCountry = data?.long_name.replace(/\s/g, '-')
                            }
                            if (data.types.indexOf('administrative_area_level_1') !== -1) {
                              if (data.types.indexOf('administrative_area_level_1') !== -1) {
                                dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
                                SearchState = data?.long_name.replace(/\s/g, '-')
                              }
                            }
                            if (data.types.indexOf('administrative_area_level_3') !== -1) {
                              if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
                                dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
                                SearchCity = data?.long_name.replace(/\s/g, '-')

                              }
                            }

                          })
                          if (SearchCity !== undefined && SearchState !== undefined && SearchCountry !== undefined) {

                            navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/${SearchCity.toLowerCase()}/`)
                          }
                          else {
                            if (SearchState !== undefined && SearchCountry !== undefined) {
                              navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/${SearchState.toLowerCase()}/`)
                            }
                            else {
                              if (SearchCountry !== undefined) {
                                navigate(pathname + `/${'in'}/${SearchCountry.toLowerCase()}/`)
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
      ).catch((error) => {
        console.trace(error)
      })
  }




} 
