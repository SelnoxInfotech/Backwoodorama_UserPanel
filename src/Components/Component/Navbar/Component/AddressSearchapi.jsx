

import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import useStyles from "../../../../Style"
import Createcontext from "../../../../Hooks/Context"
import { IoLocationSharp } from "react-icons/io5"
import { MdOutlineMyLocation } from "react-icons/md"
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default ({ openLocation, SearchBarWidth, open, setOpenLocation }) => {

  const classes = useStyles()
  const { state, dispatch } = React.useContext(Createcontext)
  const [Default, Setdefault] = React.useState('')
  // const [SelectValue, SetSelectvalue] = React.useState('')
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
    onPlaceSelected: (place) => {
      Setdefault(place?.formatted_address);
      // SetSelectvalue(place?.formatted_address);
      dispatch({ type: 'Location', Location: place?.formatted_address })
      place?.address_components?.map((data) => {
        if (data.types.indexOf('country') !== -1) {
          return dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
        }
        if (data.types.indexOf('administrative_area_level_1') !== -1) {
          return dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
        }
        if (data.types.indexOf('locality') !== -1 || data.types.indexOf('administrative_area_level_3') !== -1) {
          return dispatch({ type: 'City', City: data?.long_name.replace(/\s/g, '-') })
        }
        return data
      })
    },
    options: {

      // componentRestrictions: { country: "us" },
      fields: ["address_components", "geometry", "icon", "formatted_address"],
      strictBounds: false,
      // types: ["(establishment) "],
      types: ['address']
    },
  });
  React.useEffect(() => {
    Setdefault(state.Location)
    // setOpenLocation(!openLocation)
  }, [state])
  function handleChange(event) {
    Setdefault(event.target.value);
    // console.log( event.target.setSelectionRange)
  }
  function current(event) {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
        .then(res => res.json())
        .then((response) => {
          dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) });
          Setdefault(response?.plus_code?.compound_code.slice(9))
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
        }

        )

    });
  }
  function OnBlur() {
    setOpenLocation(false)
  }
  function onFocus() {
    setOpenLocation(true)
  }
  return (
    <>
      {/* <i className="SearcchIcon" style={{ display: open && SearchBarWidth ? "none" : "inline-flex" }}>   <IoLocationSharp color="gray" size={18} /></i> */}
      <TextField
        // size="small"
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

      {/* </div> */}


    </>

  );
};
