// import React, { useState } from "react";
// import { Autocomplete, useLoadScript } from "@react-google-maps/api";
// import axios from "axios";
// function App() {
//   // const placesLibrary = ["places"];
//   // const [searchResult, setSearchResult] = useState("Result: none");

//   // const { isLoaded } = useLoadScript({
//   //   googleMapsApiKey:'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
//   //   libraries: ["places"]
//   // });

//   // function onLoad(autocomplete) {
//   //   setSearchResult(autocomplete);
//   //   console.log(autocomplete)
//   // }

//   // function onPlaceChanged() {
//   //   if (searchResult != null) {
//   //     const place = searchResult.getPlace();
//   //     const name = place.name;
//   //     const status = place.business_status;
//   //     const formattedAddress = place.formatted_address;
//   //     // console.log(place);
//   //     console.log(`Name: ${name}`);
//   //     console.log(`Business Status: ${status}`);
//   //     console.log(`Formatted Address: ${formattedAddress}`);
//   //   } else {
//   //     alert("Please enter text");
//   //   }
//   // }

//   // if (!isLoaded) {
//   //   return <div>Loading...</div>;
//   // }
//   var config = {
//     method: 'get',
//     url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
//     headers: { }
//   };

//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   return (
//     // <div className="App">
//     //   <div id="searchColumn">
//     //     <h2>Tide Forecast Options</h2>
//     //     <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
//     //       <input
//     //         type="text"
//     //         placeholder="Search for Tide Information"
//     //         style={{
//     //           boxSizing: `border-box`,
//     //           border: `1px solid transparent`,
//     //           width: `240px`,
//     //           height: `32px`,
//     //           padding: `0 12px`,
//     //           borderRadius: `3px`,
//     //           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//     //           fontSize: `14px`,
//     //           outline: `none`,
//     //           textOverflow: `ellipses`
//     //         }}
//     //       />
//     //     </Autocomplete>
//     //   </div>
//     // </div>
//     <></>
//   );
// }

// export default App;
import { Button, TextField } from "@mui/material";
import { useRef, useEffect } from "react";
// import "./styles.css";
// const AutoComplete = () => {
//   const autoCompleteRef = useRef();
//   const inputRef = useRef();
//   const options = {
//   };
//   useEffect(() => {
//     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
//       inputRef.current,
//       options
//     );
//     autoCompleteRef.current.addListener("place_changed", async function () {
//       const place = await autoCompleteRef.current.getPlace();
//       console.log({ place });
//     });
//   }, []);
//   return (
//     <div>
//       <label>enter address :</label>
//       <input ref={inputRef} />
//     </div>
//   );
// };
// export default AutoComplete;



import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import useStyles from "../../../../Style"
import Createcontext from "../../../../Hooks/Context"
import InputAdornment from '@material-ui/core/InputAdornment';
import { IoLocationSharp } from "react-icons/io5"
export default ({openLocation,SearchBarWidth,open,setOpenLocation}) => {
  const { state, dispatch } = React.useContext(Createcontext)
  const [Default, Setdefault] = React.useState()
  const classes = useStyles()
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyB4vl80GbjoLGawT757RmLx5f2DlOED0Zo',
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["(regions)"],
      // componentRestrictions: { country: "us" },
    },
  });
  React.useEffect(() => {
    Setdefault(state.Location)
    // setOpenLocation(!openLocation)
  }, [state])
  function handleChange(event) {
    Setdefault(event.target.value);
  }
  console.log(ref)
  return (
    <>
  
      <TextField 
       size="small" 
      value={Default}
      inputRef={ref} 
      onChange={handleChange}
      // onClick={(()=>{setOpenLocation(!openLocation)})}
      type="text" 
      style={{ borderRadius: (openLocation && SearchBarWidth) ? " 16px 16px 16px 16px" : " 0px 16px 16px 0px", top: "0px", display: open && SearchBarWidth ? "none" : "inline-flex", }}
      sx={{ width: "100%"}}
      className={`sec_input_search SearchBar px-2 ${classes.SearchBar_Text}`}
       placeholder="Enter Location.." 
       InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <IoLocationSharp color="gray" size={18} />
            </InputAdornment>
        ),
        // endAdornment: (
        //     <React.Fragment>
        //         {openLocation ? (
        //             <CircularProgress color="inherit" size={20} />
        //         ) :''}
        //     </React.Fragment>
        // ),
    }}
       />
      {/* </div> */}

      {/* <Button>hhhhhhhh</Button> */}
    </>
  );
};