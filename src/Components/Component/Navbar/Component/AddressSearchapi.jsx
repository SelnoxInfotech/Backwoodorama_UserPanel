

// import React from "react";
// import { usePlacesWidget } from "react-google-autocomplete";
// // import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
// // import { useHistory } from 'react-router-dom';
// import { debounce } from 'lodash';
// import useStyles from "../../../../Style"
// import Createcontext from "../../../../Hooks/Context"
// import { useNavigate } from "react-router-dom";

// export default function AddressSearch({ openLocation, SearchBarWidth, open, setOpenLocation, path }) {
//   const classes = useStyles()
//   const navigate = useNavigate();
//   const { state, dispatch } = React.useContext(Createcontext)
//   const [Default, Setdefault] = React.useState('')


//   const { ref } = usePlacesWidget({
//     debounce: 500,
//     apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
//     onPlaceSelected:
//       (place) => {
//         if (place.name) {
//           Setdefault(state.Location)
//         }
//         else {
//           console.log(place)
//           Setdefault(place?.formatted_address);
//           dispatch({ type: 'permission', permission: true })
//           var Coun
//           var sta
//           var ci
//           var route
//           place?.address_components?.map((data) => {
//             if (data.types.indexOf('country') !== -1) {
//               Coun = data?.long_name.replace(/\s/g, '-')
//               return dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
//             }
//             if (data.types.indexOf('administrative_area_level_1') !== -1) {
//               sta = data?.long_name.replace(/\s/g, '-')
//               return dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
//             }
//             if (data.types.indexOf('locality') !== -1 || data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('sublocality') !== -1) {
//               ci = data?.long_name.replace(/\s/g, '-')
//               dispatch({ type: 'City', City: data?.long_name.replace(/\s/g, '-') })
//             }
//             if (data.types.indexOf('route') !== -1) {
//               route = data?.long_name.replace(/\s/g, '-')
//               dispatch({ type: 'route', route: data?.long_name.replace(/\s/g, '-') })
//             }
//             return data
//           })
//           if (route === undefined && Coun !== undefined) {
//             window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
//             window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
//           }
//           else {
//             if (Coun !== undefined) {

//               window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)
//               window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)
//             }
//             else {
//               Setdefault(state.Location)
//             }
//           }
//           dispatch({ type: 'Location', Location: place?.formatted_address })
//         }
//       },
//     options: {

//       fields: ["address_components", "formatted_address"],
//       // "types": ['locality', 'route', "postal_code", 'administrative_area_level_2'],
//       // componentRestrictions: { country: ['in'] }
//       // types: ['city']
//     },
//     defaultValue: "Amsterdam",
//   });

//   React.useEffect(() => {
//     Setdefault(state.Location)
//   }, [state])
//   function handleChange(event) {
//     Setdefault(event.target.value);

//   }
  // function current(event) {
  //   navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {

  //     if (permissionStatus.state === 'denied') {
  //       alert('Please allow location access.');
  //     } else {
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //         fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
  //           .then(res => res.json())
  //           .then((response) => {
  //             dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) });
  //             Setdefault(response?.plus_code?.compound_code.slice(9))
  //             var Coun
  //             var sta
  //             var ci
  //             response?.results?.map((data) => {
  //               if (data.types.indexOf('country') !== -1) {
  //                 Coun = data?.formatted_address.replace(/\s/g, '-')
  //                 return dispatch({ type: 'Country', Country: data?.formatted_address.replace(/\s/g, '-') })
  //               }
  //               if (data.types.indexOf('administrative_area_level_1') !== -1) {
  //                 data.address_components.map((state) => {
  //                   if (state.types.indexOf('administrative_area_level_1') !== -1) {
  //                     sta = state?.long_name.replace(/\s/g, '-')
  //                     return dispatch({ type: 'State', State: state?.long_name.replace(/\s/g, '-') })
  //                   }
  //                   return state
  //                 })
  //               }
  //               if (data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('administrative_area_level_2') !== -1) {
  //                 data.address_components.map((city) => {
  //                   if (city.types.indexOf('administrative_area_level_3') !== -1 || city.types.indexOf('locality') !== -1 || data.types.indexOf('locality') !== -1) {
  //                     ci = city?.long_name?.replace(/\s/g, '-')
  //                     return dispatch({ type: 'City', City: city?.long_name?.replace(/\s/g, '-') })
  //                   }
  //                   return city
  //                 })

  //               }
  //               return data

  //             })
  //             window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
  //             window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
  //           }

  //           )

  //       });
  //     }
  //   });
  // }
//   function OnBlur() {
//     setOpenLocation(false)
//     Setdefault(state.Location)

//   }
//   function onFocus() {
//     setOpenLocation(true)
//     Setdefault('')
//   }



//   return (
//     <React.Fragment>
//       <TextField
//         value={Default || ''}
//         inputRef={ref}
//         onChange={handleChange}
//         onFocus={onFocus}
//         onBlur={OnBlur}
//         type="text"
//         sx={{ width: "100%" }}
//         className={`sec_input_search SearchBar Input ${classes.SearchBar_Text}`}
//         placeholder="Enter Location.."

//       />


//     </React.Fragment>
//   );
// };


// import { TextField } from '@mui/material';
import { IoLocationSharp } from "react-icons/io5"
import { MdOutlineMyLocation } from "react-icons/md"
import { IconButton, InputAdornment, TextField } from "@mui/material";
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import useStyles from "../../../../Style"
import Createcontext from "../../../../Hooks/Context"
import { useNavigate } from "react-router-dom";
export default function SearchingLocation({ openLocation, SearchBarWidth, open1, setOpenLocation, path }) {
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading
  } = useGoogle({
    debounce: 500,
    language: 'en',
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU'
  });
  const classes = useStyles()
  const navigate = useNavigate();
  const [formatted_address, Setformatted_address] = React.useState('')
  const { state, dispatch } = React.useContext(Createcontext)
  const[dropdwondata,Setdropwondata]=React.useState([])
  React.useEffect(() => {
    Setformatted_address(state.Location)
  }, [state])

  function handlechnage(e, value) {
    placesService?.getDetails({ placeId: value?.place_id }, (placeDetails) => {
      Setformatted_address(placeDetails.formatted_address);
      dispatch({ type: 'permission', permission: true })
      var Coun
      var sta
      var ci
      var route
      placeDetails?.address_components?.map((data) => {
        if (data.types.indexOf('country') !== -1) {
          Coun = data?.long_name.replace(/\s/g, '-')
          return dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
        }
        if (data.types.indexOf('administrative_area_level_1') !== -1) {
          sta = data?.long_name.replace(/\s/g, '-')
          return dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
        }
        if ((data.types.indexOf('locality') !== -1 && data.types.indexOf('administrative_area_level_3' !== -1)) || data.types.indexOf('sublocality') !== -1 || data.types.indexOf("postal_town") !== -1
          || data.types.indexOf("establishment") !== -1) {
          ci = data?.long_name.replace(/\s/g, '-')
          dispatch({ type: 'City', City: data?.long_name.replace(/\s/g, '-') })
        }
        if (data.types.indexOf('route') !== -1 || data.types.indexOf('sublocality_level_2') !== -1 || data.types.indexOf("establishment") !== -1 
        ||data.types.indexOf("neighborhood") !== -1 ) {
          route = data?.long_name.replace(/\s/g, '-')
          dispatch({ type: 'route', route: data?.long_name.replace(/\s/g, '-') })
        }
        return data
      })
      if (sta !== undefined && ci !== undefined && route !== undefined) {
        window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)
        window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)

      }
      else {
        if (sta !== undefined && ci !== undefined && Coun !== undefined) {
          window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
          window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)

        }
        else if (Coun !== undefined && sta !== undefined) {

          window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}`)
          window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}`)
        }
        else if (Coun !== undefined) {

          window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}`)
          window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}`)
        }
        else {
          Setformatted_address(state.Location)
        }
      }
      if(ci === undefined){
        dispatch({ type: 'City', City:''})
      }
       if ( sta  === undefined){
        dispatch({ type: 'State', State:''})
      }
      dispatch({ type: 'Location', Location: placeDetails?.formatted_address })

    })
  }
  function OnBlur() {
    setOpenLocation(false)
    Setformatted_address(state.Location)

  }
  function onFocus() {
    setOpenLocation(true)
    Setformatted_address('')
  }
  const [open, setOpen] = React.useState(false);

React.useEffect(()=>{
  Setdropwondata(placePredictions)
},[placePredictions])  

function current(event) {
  navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {

    if (permissionStatus.state === 'denied') {
      alert('Please allow location access.');
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
          .then(res => res.json())
          .then((response) => {
            console.log(response?.results[0])
            dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address});
            Setformatted_address(response?.results[0]?.formatted_address)
            var Coun
            var sta
            var ci
            var route
            response?.results[0]?.address_components?.map((data) => {
              if (data.types.indexOf('country') !== -1) {
                Coun = data?.long_name?.replace(/\s/g, '-')
                return dispatch({ type: 'Country', Country: data?.long_name?.replace(/\s/g, '-') })
              }
              if (data.types.indexOf('administrative_area_level_1') !== -1) {
                sta = data?.long_name?.replace(/\s/g, '-')
                return dispatch({ type: 'State', State: data?.long_name?.replace(/\s/g, '-') })
              }else{
                dispatch({ type: 'State', State: '' })
              }
              if ((data.types.indexOf('locality') !== -1 && data.types.indexOf('administrative_area_level_3' !== -1)) || data.types.indexOf("postal_town") !== -1
                ||  data.types.indexOf('sublocality') !== -1) {
                ci = data?.long_name?.replace(/\s/g, '-')
                dispatch({ type: 'City', City: data?.long_name?.replace(/\s/g, '-') })
              }else{
                dispatch({ type: 'City', City: ''})
              }
              if (data.types.indexOf('route') !== -1 || data.types.indexOf('sublocality_level_2') !== -1 || data.types.indexOf("establishment") !== -1 ) {
                route = data?.long_name?.replace(/\s/g, '-')
                dispatch({ type: 'route', route: data?.long_name?.replace(/\s/g, '-') })
              }else{
                dispatch({ type: 'route', route: '' })
              }
              
            })
            if (sta !== undefined && ci !== undefined && route !== undefined) {
              window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)
              window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)
      
            }
            else {
              if (sta !== undefined && ci !== undefined && Coun !== undefined) {
                window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
                window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
      
              }
              else if (Coun !== undefined && sta !== undefined) {
      
                window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}`)
                window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}`)
              }
              else if (Coun !== undefined) {
      
                window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}`)
                window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}`)
              }
              else {
                Setformatted_address(state.Location)
              }
            }
            dispatch({ type: 'Location', Location: response?.results[0]?.formatted_address })
          }

          )

      });
    }
  });
}

  return (
    <Autocomplete
      freeSolo
      disableClearable
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      id="autocomplete-demo"
      onFocus={onFocus}
      className={`sec_input_search SearchBar ${classes.SearchBar_Text}`}
      style={{ width: "100%", borderRadius: (openLocation && SearchBarWidth) ? " 16px 16px 16px 16px" : " 0px 16px 16px 0px", top: "0px", display: open1 && SearchBarWidth ? "none" : "inline-flex", }}
      onBlur={OnBlur}
      sx={{ width: "100%" }}
      options={dropdwondata }
      inputValue={formatted_address}
      value={formatted_address}
      onChange={((element, value) => { handlechnage(element, value) })}
      renderOption={(props, value, index) => {
        return (
          <li  {...props} >  <IoLocationSharp />{value.description}</li>
        )
      }}
      getOptionSelected={option => option?.description}
      getOptionLabel={(option) => (option?.description ? option?.description:'')}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => {
            Setformatted_address(e.target.value);
            getPlacePredictions({
              input: e.target.value
            })
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <IoLocationSharp />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
            endAdornment: (
              <IconButton onClick={current}>
                <MdOutlineMyLocation color="inherit" size={16} style={{ cursor: 'pointer' }} />
              </IconButton>
  
            ),
          }}


        />
      )}
    />
  );
}