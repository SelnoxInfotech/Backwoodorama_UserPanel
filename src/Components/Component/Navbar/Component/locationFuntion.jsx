import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from 'react-google-autocomplete';
import { debounce } from 'lodash';
export default function LocationSearch() {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [searchText, setSearchText] = useState('');
  
    // Define a debounce function for the Autocomplete input
    const handleSearchTextChange = debounce((value) => {
      console.log(value);
    }, 300); // Adjust the debounce delay as needed
  
    return (
      <div>
        <Autocomplete
        //  apiKey= {'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU'}
          onPlaceSelected={handleSearchTextChange(

            (place) => {
                setSelectedPlace(place);
              }

          )}
        />
    
      </div>
    );
  }