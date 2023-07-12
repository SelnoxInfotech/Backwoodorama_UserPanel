import { TextField } from '@mui/material';
import React from 'react'
import { usePlacesWidget } from "react-google-autocomplete";
export default function DeliverAutoCompleteAddress() {
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
    onPlaceSelected: (place) => {
      console.log(place);
      for (var i = 0; i < place?.address_components.length; i++) {
        var component = place.address_components[i];
        console.log(component)
      //   if (component.types.indexOf('postal_code') !== -1) {

      //     console.log(component)
      //     break;
      //   }
      // else {
      //   console.log("not Street Address")
      // }

    }
    },
    options: {

      fields: ["address_components", "geometry", "icon", "formatted_address", "name",],
      strictBounds: true,
      types: ["geocode"],
  },
  });
  return <TextField

    inputRef={ref}
    placeholder="Enter Your Delivery Location"
    variant="outlined"
    fullWidth size='small'

  />
  
}
