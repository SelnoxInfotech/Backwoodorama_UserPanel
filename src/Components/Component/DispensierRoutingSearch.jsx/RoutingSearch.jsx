import React from 'react'
import Createcontext from "../../../Hooks/Context"
import { useNavigate } from 'react-router-dom'
export default function RoutingSearch({ city, State, country, pathname }) {
  const { state, dispatch } = React.useContext(Createcontext)
  const navigate = useNavigate()
  const [search ,  Setsearch]=React.useState('')
  React.useEffect(()=>{
    console.log(city, State, country)
       if(city === undefined) {
         if(State !== undefined){
          Setsearch(State)
         }
         else{
          Setsearch(country)
         }
       }  
       else {
        Setsearch(city)
       }
  },[])

    React.useEffect(() => {
      var SearchCity , SearchState , SearchCountry ;
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
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



          if (SearchCity !== undefined && SearchState !== undefined &&  SearchCountry !== undefined) {

            navigate(pathname + `/${'in'}/${SearchCountry}/${SearchState}/${SearchCity}`)
          }
          else {
            if(SearchState !== undefined  &&  SearchCountry !== undefined )
            {
              navigate(pathname + `/${'in'}/${SearchCountry}/${SearchState}`)
            }
            else{
              if(  SearchCountry !== undefined )
              {
                navigate(pathname + `/${'in'}/${SearchCountry}`)
              }
        //       else {
        //         fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${"New-york"}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
        // .then(res => res.json())
        // .then(response => {
        //     dispatch({ type: 'permission', permission: true })
        //     dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
        //     response?.results[0]?.address_components?.map((data) => {
        //       if (data.types.indexOf('country') !== -1) {
        //         dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
        //         SearchCountry = data?.long_name.replace(/\s/g, '-')
        //       }
        //       if (data.types.indexOf('administrative_area_level_1') !== -1) {
        //         if (data.types.indexOf('administrative_area_level_1') !== -1) {
        //           dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
        //           SearchState = data?.long_name.replace(/\s/g, '-')
        //         }
        //       }
        //       if (data.types.indexOf('administrative_area_level_3') !== -1) {
        //         if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('locality') !== -1) {
        //           dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
        //           SearchCity = data?.long_name.replace(/\s/g, '-')

        //         }
        //       }

        //     })



        //   if (SearchCity !== undefined && SearchState !== undefined &&  SearchCountry !== undefined) {

        //     navigate(pathname + `/${'in'}/${SearchCountry}/${SearchState}/${SearchCity}/`)
        //   }
        //   else {
        //     if(SearchState !== undefined  &&  SearchCountry !== undefined )
        //     {
        //       navigate(pathname + `/${'in'}/${SearchCountry}/${SearchState}/`)
        //     }
        //     else{
        //       if(  SearchCountry !== undefined )
        //       {
        //         navigate(pathname + `/${'in'}/${SearchCountry}/`)
        //       }
        //     }
        //   }
        
        //   // console.log(city, s, c)


        // }
        
        
        
        
        // ).catch((error) => {
        //   console.trace(error)
        // })
        //       }
            }
          }
        
          // console.log(city, s, c)


        }
        
        
        
        
        ).catch((error) => {
          console.trace(error)
        })
    }, [search])

} 
