import React from 'react'
import Createcontext from "../../../Hooks/Context"
import { useNavigate } from 'react-router-dom'
export default function RoutingSearch({ city, State, country, pathname  ,route}) {
  const { state, dispatch } = React.useContext(Createcontext)
  const navigate = useNavigate()
  React.useEffect(() => {

 if(route !== undefined){
  location(route +" "+city +" "+State+" "+country  , "route")
 }
 else {
  if (city === undefined) {
    if (State !== undefined) {
      location(State+" "+country, "state")
    }
    else {
      location(country, "Country")
    }
  }
  else {
    location(city+" "+State+" "+country, "city")
  }
 }
  }, [])


  function location(value, type) {
    console.log(value , type)
    // var ci, sta, Coun , route;    
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
      .then(res => res.json())
      .then(response => {
        var Coun;
        var sta;
        var ci;
        var route;

        if (response.results.length !== 0) {
          dispatch({ type: 'permission', permission: true })
          dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
        
          response?.results[0]?.address_components?.map((data) => {
            if (data.types.indexOf('country') !== -1) {
              Coun = data?.long_name?.replace(/\s/g, '-')
              return dispatch({ type: 'Country', Country: data?.long_name?.replace(/\s/g, '-') })
            }
            if (data.types.indexOf('administrative_area_level_1') !== -1) {
              sta = data?.long_name?.replace(/\s/g, '-')
              return dispatch({ type: 'State', State: data?.long_name?.replace(/\s/g, '-') })
            } else {
              dispatch({ type: 'State', State: '' })
            }
            if ((data.types.indexOf('locality') !== -1 && data.types.indexOf('administrative_area_level_3' !== -1)) || data.types.indexOf("postal_town") !== -1
              || data.types.indexOf('sublocality') !== -1) {
              ci = data?.long_name?.replace(/\s/g, '-')
              dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
            } else {
              dispatch({ type: 'City', City: '' })
            }
            if (data.types.indexOf('route') !== -1 || data.types.indexOf('sublocality_level_2') !== -1 || data.types.indexOf("establishment") !== -1) {
              route = data?.long_name?.replace(/\s/g, '-')
              dispatch({ type: 'route', route: data?.long_name?.replace(/\s/g, '-') })
            } else {
              dispatch({ type: 'route', route: '' })
            }
            if(ci === undefined){
              if (data.types.indexOf('administrative_area_level_2') !== -1 || data.types.indexOf('political') !== -1 ) {
                ci = data?.long_name.replace(/\s/g, '-')
                dispatch({ type: 'City', City: data?.long_name.replace(/\s/g, '-') })
              }
             }

          })

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
      ).catch((error) => {
        console.trace(error)
      })
  }




} 
