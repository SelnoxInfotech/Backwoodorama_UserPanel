// // // // // import React, { useState } from "react";
// // // // // import { Autocomplete, useLoadScript } from "@react-google-maps/api";
// // // // // import axios from "axios";
// // // // // function App() {
// // // // //   // const placesLibrary = ["places"];
// // // // //   // const [searchResult, setSearchResult] = useState("Result: none");

// // // // //   // const { isLoaded } = useLoadScript({
// // // // //   //   googleMapsApiKey:'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
// // // // //   //   libraries: ["places"]
// // // // //   // });

// // // // //   // function onLoad(autocomplete) {
// // // // //   //   setSearchResult(autocomplete);
// // // // //   //   console.log(autocomplete)
// // // // //   // }

// // // // //   // function onPlaceChanged() {
// // // // //   //   if (searchResult != null) {
// // // // //   //     const place = searchResult.getPlace();
// // // // //   //     const name = place.name;
// // // // //   //     const status = place.business_status;
// // // // //   //     const formattedAddress = place.formatted_address;
// // // // //   //     // console.log(place);
// // // // //   //     console.log(`Name: ${name}`);
// // // // //   //     console.log(`Business Status: ${status}`);
// // // // //   //     console.log(`Formatted Address: ${formattedAddress}`);
// // // // //   //   } else {
// // // // //   //     alert("Please enter text");
// // // // //   //   }
// // // // //   // }

// // // // //   // if (!isLoaded) {
// // // // //   //   return <div>Loading...</div>;
// // // // //   // }
// // // // //   var config = {
// // // // //     method: 'get',
// // // // //     url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
// // // // //     headers: { }
// // // // //   };

// // // // //   axios(config)
// // // // //   .then(function (response) {
// // // // //     console.log(JSON.stringify(response.data));
// // // // //   })
// // // // //   .catch(function (error) {
// // // // //     console.log(error);
// // // // //   });
// // // // //   return (
// // // // //     // <div className="App">
// // // // //     //   <div id="searchColumn">
// // // // //     //     <h2>Tide Forecast Options</h2>
// // // // //     //     <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
// // // // //     //       <input
// // // // //     //         type="text"
// // // // //     //         placeholder="Search for Tide Information"
// // // // //     //         style={{
// // // // //     //           boxSizing: `border-box`,
// // // // //     //           border: `1px solid transparent`,
// // // // //     //           width: `240px`,
// // // // //     //           height: `32px`,
// // // // //     //           padding: `0 12px`,
// // // // //     //           borderRadius: `3px`,
// // // // //     //           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
// // // // //     //           fontSize: `14px`,
// // // // //     //           outline: `none`,
// // // // //     //           textOverflow: `ellipses`
// // // // //     //         }}
// // // // //     //       />
// // // // //     //     </Autocomplete>
// // // // //     //   </div>
// // // // //     // </div>
// // // // //     <></>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import { Button, TextField } from "@mui/material";
// // // // import { useRef, useEffect } from "react";
// // // // // import "./styles.css";
// // // // // const AutoComplete = () => {
// // // // //   const autoCompleteRef = useRef();
// // // // //   const inputRef = useRef();
// // // // //   const options = {
// // // // //   };
// // // // //   useEffect(() => {
// // // // //     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
// // // // //       inputRef.current,
// // // // //       options
// // // // //     );
// // // // //     autoCompleteRef.current.addListener("place_changed", async function () {
// // // // //       const place = await autoCompleteRef.current.getPlace();
// // // // //       console.log({ place });
// // // // //     });
// // // // //   }, []);
// // // // //   return (
// // // // //     <div>
// // // // //       <label>enter address :</label>
// // // // //       <input ref={inputRef} />
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // // export default AutoComplete;



import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import useStyles from "../../../../Style"
import Createcontext from "../../../../Hooks/Context"
import { IoLocationSharp } from "react-icons/io5"
import { MdOutlineMyLocation } from "react-icons/md"
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { IconBase } from "react-icons";
export default ({ openLocation, SearchBarWidth, open, setOpenLocation }) => {

  const classes = useStyles()
  const { state, dispatch } = React.useContext(Createcontext)
  const [Default, Setdefault] = React.useState()
  const [SelectValue, SetSelectvalue] = React.useState('')
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyB4vl80GbjoLGawT757RmLx5f2DlOED0Zo',
    onPlaceSelected: (place) => {
      Setdefault(place?.formatted_address);
      SetSelectvalue(place?.formatted_address);
      dispatch({ type: 'Location', Location: place?.formatted_address })

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
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${"AIzaSyB4vl80GbjoLGawT757RmLx5f2DlOED0Zo"}`)
        .then(res => res.json())
        .then((response) => {
          dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) });
          Setdefault(response?.plus_code?.compound_code.slice(9))
        }

        )

    });


  }
  function OnBlur() {
    // Setdefault(state.Location )
    setOpenLocation(false)
    // SearchBarWidth(true)

  }
  function onFocus() {
    // Setdefault('')
    setOpenLocation(true)
    // SearchBarWidth(true)
  }
  return (
    <>
      {/* <i className="SearcchIcon" style={{ display: open && SearchBarWidth ? "none" : "inline-flex" }}>   <IoLocationSharp color="gray" size={18} /></i> */}
      <TextField
        // size="small"
        value={Default}
        inputRef={ref}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={OnBlur}
        autocomplete="on"
        type="text"
        style={{ width: "100%", borderRadius: (openLocation && SearchBarWidth) ? " 16px 16px 16px 16px" : " 0px 16px 16px 0px", top: "0px", display: open && SearchBarWidth ? "none" : "inline-flex", }}
        sx={{ width: "100%" }}
        className={`sec_input_search SearchBar Input ${classes.SearchBar_Text}`}
        placeholder="Enter Location.."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IoLocationSharp color="gray" size={18} />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton>
              <MdOutlineMyLocation color="inherit" size={16} style={{ cursor: 'pointer' }} onClick={current} />
            </IconButton>

          ),
        }}
      />

      {/* </div> */}


    </>

  );
};







// // import React from 'react';
// // import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// // // If you want to use the provided css
// // import 'react-google-places-autocomplete/dist/index.min.css';
// // import { Button } from "@mui/material";

// // const Component = ({ openLocation, SearchBarWidth, open, setOpenLocation }) => (
// //   // const classes = useStyles()

// //   <GooglePlacesAutocomplete apiKey="AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"
// //     onSelect={console.log}
// //     styles={{
// //       textInput: {
// //         height: '100%', backgroundColor: '#eee',
// //         marginVertical: 5
// //       }
// //     }}
// //     onPress={(data, details = null) => console.log(data, details)}
// //     onNotFound={() => console.log('no results')}

// //     renderSuggestions={(active, suggestions, onSelectSuggestion) => (

// //       <div className="suggestions-container">

// //         {

// //           suggestions.map((suggestion) => {
// //             const style = {
// //               backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
// //             };
// //             return (

// //               <div
// //                 // style 
// //                 className="suggestion"
// //                 onClick={(event) => onSelectSuggestion(suggestion, event)}
// //               >
// //                 {suggestion.description}
// //               </div>
// //             )
// //           })
// //         }
// //       </div>

// //     )}
// //     textInputProps={{
// //       autoFocus: true,
// //       blurOnSubmit: false,
// //     }}
// //     renderInput={(props) => (
// //       <div>
// //         <input
// //           // Custom properties
// //           {...props}
// //           className={`sec_input_search SearchBar Input `}
// //           style={{ width: "100%", height: '32px', borderRadius: (openLocation && SearchBarWidth) ? " 16px 16px 16px 16px" : " 0px 16px 16px 0px", top: "0px", display: open && SearchBarWidth ? "none" : "inline-flex", }}
// //         />
// //       </div>

// //     )}
// //   />

// // );

// // export default Component;


// import React, { Component } from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   // geocodeByPlaceId,
//   getLatLng,
// } from 'react-places-autocomplete';


// class Example3 extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       lat: null,
//       lng: null,
//     }
//     this.handleSelect = this.handleSelect.bind(this)
//   }

//   handleSelect(latLng) {
//     this.setState({
//       lat: latLng.lat,
//       lng: latLng.lng,
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Example3</h1>
//         lat = {this.state.lat} <br />
//         lng = {this.state.lng} <br />
//         <hr />
//         <LocationSearchInput onSelect={this.handleSelect} />
//       </div>
//     );
//   }
// }

// export default Example3;



// class LocationSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' };
//   }

//   handleChange = address => {
//     this.setState({ address });
//     console.log(address)
//   };

//   handleSelect = address => {
//     // geocodeByAddress(address)
//     //   .then(results => getLatLng(results[0]))
//     //   .then(latLng => this.props.onSelect(latLng))
//     //   .catch(error => console.error('Error', error));
//     console.log(address)
//   };

//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}

//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }



// import React from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// export default ({ openLocation, SearchBarWidth, open, setOpenLocation }) => {
//   const classes = useStyles()
// const [Address,SetAddress] = React.useState("")

//  const handleChange = address => {
//   console.log(address)
//     SetAddress( address );
//   };

// const handleSelect = address => {
//   SetAddress( address )
//   // geocodeByAddress(address)
//   //   .then(results => getLatLng(results[0]))
//   //   .then(latLng => console.log('Success', latLng))
//   //   .catch(error => console.error('Error', error));
// };


//   return (
//     <PlacesAutocomplete
//       value={Address}
//       onChange={handleChange}
//       onSelect={handleSelect}
//       styles={{ borderRadius: (open && SearchBarWidth) ? " 16px 16px 16px 16px" : " 16px 0px 0px 16px", top: "0px", display: openLocation && SearchBarWidth ? "none" : "inline-flex", width: open && SearchBarWidth ? "100%" : "100%" }}
//     >
//       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//         <div style={{width: "100%"}}>
//           <input
//             {...getInputProps({
//               placeholder: 'Search Places ...',
//               className:  `SearchBar nav_search_bar_div  InputSearch${classes.SearchBar_Text}`,
//             })}
//           />
//           <div className="autocomplete-dropdown-container">
//             {loading && <div>Loading...</div>}
//             {suggestions.map(suggestion => {
//               const className = suggestion.active
//                 ? 'suggestion-item--active'
//                 : 'suggestion-item';
//               // inline style for demonstration purpose
//               const style = suggestion.active
//                 ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                 : { backgroundColor: '#ffffff', cursor: 'pointer' };
//               return (
//                 <div
//                   {...getSuggestionItemProps(suggestion, {
//                     className,
//                     style,
//                   })}
//                 >
//                   <span>{suggestion.description}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </PlacesAutocomplete>
//   );

// }