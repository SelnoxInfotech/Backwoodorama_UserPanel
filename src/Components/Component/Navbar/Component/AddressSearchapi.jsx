

import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import useStyles from "../../../../Style"
import Createcontext from "../../../../Hooks/Context"
import { IoLocationSharp } from "react-icons/io5"
import { MdOutlineMyLocation } from "react-icons/md"
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useNavigate ,useLocation } from "react-router-dom";
export default function  AddressSearch ({ openLocation, SearchBarWidth, open, setOpenLocation }) {
  const classes = useStyles()
  const Navigate = useNavigate()
  const Location =  useLocation()
  const { state, dispatch } = React.useContext(Createcontext)
  const [Default, Setdefault] = React.useState('')
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
    onPlaceSelected: (place) => {
      Setdefault(place?.formatted_address);
      dispatch({ type: 'Location', Location: place?.formatted_address })
      var Coun 
      var sta 
      var ci 
      place?.address_components?.map((data) => {
        if (data.types.indexOf('country') !== -1) {
          Coun = data?.long_name.replace(/\s/g, '-')
          return dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
        }
        if (data.types.indexOf('administrative_area_level_1') !== -1) {
          sta = data?.long_name.replace(/\s/g, '-')
          return dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
        }
        if (data.types.indexOf('locality') !== -1 || data.types.indexOf('administrative_area_level_3') !== -1) {
          ci =  data?.long_name.replace(/\s/g, '-')
          return dispatch({ type: 'City', City: data?.long_name.replace(/\s/g, '-') })
        }
        return data
      })
  if(Location.pathname.slice(0,17) === "/Weed-Dispansires" )
  {
    Navigate(`/Weed-Dispansires/in/${Coun}/${sta}/${ci}`)
  }
  if(Location.pathname.slice(0,16) ===  '/Weed-Deliveries')
  {
    Navigate(`/Weed-Deliveries/in/${Coun}/${sta}/${ci}`)
  }
    },
    options: {

      fields: ["address_components", "formatted_address"],
      "types": ['locality', 'route', "postal_code", 'administrative_area_level_2'],
      componentRestrictions: { country: ['us', "ca"] }
      // types: ['city']
    },
  });
  React.useEffect(() => {
    Setdefault(state.Location)
 
  }, [state])
  function handleChange(event) {
    Setdefault(event.target.value);
    // console.log( event.target.setSelectionRange)
  }
  function current(event) {
    navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
      if (permissionStatus.state === 'denied') {
        alert('Please allow location access.');
      } else {
        navigator.geolocation.getCurrentPosition(function (position) {
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
            .then(res => res.json())
            .then((response) => {
              dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) });
              Setdefault(response?.plus_code?.compound_code.slice(9))
              response?.results?.map((data) => {
                if (data.types.indexOf('country') !== -1) {
                  return dispatch({ type: 'Country', Country: data?.formatted_address.replace(/\s/g, '-') })
                }
                if (data.types.indexOf('administrative_area_level_1') !== -1) {
                  data.address_components.map((state) => {
                    if (state.types.indexOf('administrative_area_level_1') !== -1) {
                      return dispatch({ type: 'State', State: state?.long_name.replace(/\s/g, '-') })
                    }
                    return state
                  })
                }
                if (data.types.indexOf('administrative_area_level_3') !== -1) {
                  data.address_components.map((city) => {
                    if (city.types.indexOf('administrative_area_level_3') !== -1 || city.types.indexOf('locality') !== -1) {
                      return dispatch({ type: 'City', City: city?.long_name?.replace(/\s/g, '-') })
                    }
                    return city
                  })

                }
                return data

              })
            }

            )

        });
      }
    });
  }
  function OnBlur() {
    setOpenLocation(false)
    Setdefault(state.Location)

  }
  function onFocus() {
    setOpenLocation(true)
    Setdefault('')
  }
  return (
    <>
      <TextField
        value={Default || ''}
        inputRef={ref}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={OnBlur}
        type="text"
        style={{ width: "100%", borderRadius: (openLocation && SearchBarWidth) ? " 16px 16px 16px 16px" : " 0px 16px 16px 0px", top: "0px", display: open && SearchBarWidth ? "none" : "inline-flex", }}
        sx={{ width: "100%" }}
        className={`sec_input_search SearchBar Input ${classes.SearchBar_Text}`}
        placeholder="Enter Location.."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IoLocationSharp color="#858585" size={16} />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton onClick={current}>
              <MdOutlineMyLocation color="inherit" size={16} style={{ cursor: 'pointer' }} />
            </IconButton>

          ),
        }}
      />

      {
        // state.Location !== "" ||     state.Location !==  undefined && <CurrentLocation></CurrentLocation>
      }
    </>

  );




};
