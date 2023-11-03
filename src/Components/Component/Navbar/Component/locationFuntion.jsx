import { TextField } from '@mui/material';
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
export default function () {
  const [search, SetSearch] = React.useState([])
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading
  } = useGoogle({
    debounce: 700,
    language: 'en',
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU'
  });


  React.useEffect(() => {
    SetSearch(placePredictions)
  }, [getPlacePredictions])

  function handlechnage(e, value) {
    console.log(e, value)
    placesService?.getDetails({ placeId: value?.place_id }, (placeDetails) => console.log(placeDetails))
  }


  
  return (  
    <Autocomplete
      id="autocomplete-demo"
      options={search}
      onChange={((element, value) => { handlechnage(element, value) })}
      renderOption={(props, value, index) => {
        return <li {...props} > {value.description}</li>
      }}
      getOptionSelected={option => option?.description}
      getOptionLabel={(option) => (option?.description)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => {
            getPlacePredictions({
              input: e.target.value
            })
          }}
          label="Select a fruit"
          variant="outlined"
        />
      )}
    />
  );
}