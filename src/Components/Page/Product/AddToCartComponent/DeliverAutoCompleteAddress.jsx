import { TextField } from '@mui/material';
import React from 'react'
import { usePlacesWidget } from "react-google-autocomplete";
// import { useFormContext,Controller } from "react-hook-form";
import useStyles from '../../../../Style';
import  Axios from 'axios';
export default function DeliverAutoCompleteAddress({ OpenDelivery }) {
  const classes = useStyles()
  const [error, Seterror] = React.useState('')
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
    onPlaceSelected: (place) => {
      if (place.name) {
        console.log(place);
        Axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${place.name}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
          .then(response => {
            console.log(response)
            if(response.data.results.length !==0){
              response.results[0]?.address_components.map((data) => {
                console.log(data.types)
                data.types.map((data1) => console.log(data1 === "postal_code"))
              })
            }
            else
            {
              console.log('e')
            }
          })

        // for (var i = 0; i < a.length; i++) {
        //   console.log( a)
        //   // console.log( a[i].types)
        //   // var component = a[i].types;
        //   for (var j = 0; j < a[i]?.types; j++) {
        //     console.log(j)

        //     // if (component["types"] === ["postal_code"]) {
        //     //   console.log("4564884")
        //     // }
        //     // else {
        //     //   console.log("abcd")
        //     // }
        //   }

        // }
        // a.map((data)=>{
        //    console.log(data.types)
        //    data.types.map((data1)=> console.log(data1==="postal_code"))
        // })




        // })

        //  dispatch({ type: 'Location', Location: response?.plus_code?.compound_code.slice(9) })

      }
      // else {
      //   for (var i = 0; i < place?.address_components.length; i++) {
      //     var component = place.address_components[i];
      //     console.log(component)
      //     if (component.types.indexOf('postal_code') !== -1) {

      //       console.log(component)
      //       break;
      //     }
      //     else {
      //       Seterror("not Street Address")
      //     }

      //   }
      // }

    },
    options: {

      fields: ["address_components", "geometry", "icon", "formatted_address", "name",],
      strictBounds: true,
      types: ["geocode"],
    },
  });

  const commentEnterSubmit = (e) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      Seterror("fhhfkjhkjf")

    }
  }

  return (


    <>
      <TextField
        className={classes.textFieldFocusBorderColor}
        inputRef={ref}
        placeholder="Enter Your Delivery Location"
        variant="outlined"
        fullWidth size='small'
        onKeyDown={commentEnterSubmit}

      />
      {
        error !== "" && <span className="help-block">! Street Address not found </span>
      }
    </>
  )

}
