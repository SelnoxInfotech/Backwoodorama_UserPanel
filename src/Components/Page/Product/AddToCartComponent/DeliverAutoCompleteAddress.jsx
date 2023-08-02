import { InputAdornment, TextField } from '@mui/material';
import React from 'react'
import { usePlacesWidget } from "react-google-autocomplete";
import { IoCheckmarkSharp } from "react-icons/io5"
import { RiUserLocationLine } from "react-icons/ri"
import { BiErrorCircle } from "react-icons/bi"
import useStyles from '../../../../Style';
import Createcontext from "../../../../Hooks/Context"
import Axios from 'axios';
export default function DeliverAutoCompleteAddress({ OpenDelivery }) {
  const classes = useStyles()
  const { state, dispatch } = React.useContext(Createcontext)
  const [Address, SetAddress] = React.useState('')
  console.log(state.DeliveryAddress)
  const [error, Seterror] = React.useState()
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
    onPlaceSelected: (place) => {
      console.log(place)
      if (place.address_components) {
        try {
          for (var i = 0; i < place?.address_components.length; i++) {
            var component = place.address_components[i];
            if (component.types.indexOf('postal_code') !== -1 || component.types.indexOf('street_number') !== -1) {

              CheckPostal(component.long_name, place.formatted_address)
              break;
            }
            else {
              dispatch({ type: 'DeliveryAddress', DeliveryAddress: place.formatted_address })
              Seterror("not Street Address")
            }

          }
        } catch (error) {
          Seterror("not Street Address")
        }
      }
      else {
        Axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${place.name}&key=${"AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU"}`)
          .then(response => {
            try {
              if (response.data.results.length !== 0) {
                response.data.results[0]?.address_components?.map((data) => {
                  return (
                    data.types.map((data1) => {
                      if (data1 === "postal_code" || data1 === "street_number") {

                        return CheckPostal(data.long_name, place.name)

                      }
                      else {
                        return data1
                      }
                    }
                    )
                  )

                })
              }
              else {
                Seterror('Not A street Address')
                dispatch({ type: 'DeliveryAddress', DeliveryAddress: '' })
              }
            } catch (error) {
              dispatch({ type: 'DeliveryAddress', DeliveryAddress: '' })

              Seterror('Not A street Address')
            }
          })
      }

    },
    options: {

      fields: ["address_components", "geometry", "icon", "formatted_address", "name",],
      strictBounds: true,
      types: ["geocode"],
    },
  });

  // React.useState(()=>{
  //   SetAddress(() => {
  //     return state.DeliveryAddress;
  //   })
  // },[])
  console.log(Address, state.DeliveryAddress)
  // const commentEnterSubmit = (e) => {
  //   if (e.key === "Enter" && e.shiftKey === false) {
  //     Seterror("fhhfkjhkjf")

  //   }
  // }

  function CheckPostal(data, name) {
    Axios.post(`https://sweede.app/UserPanel/Get-GetDeliveryCheck/`,
      {
        "PinCode": data
      }
    )

      .then(response => {
        if (response.data === "Not Found") {
          Seterror('Not A street Address')
          dispatch({ type: 'DeliveryAddress', DeliveryAddress: '' })
        }
        else {
          SetAddress(name)
          dispatch({ type: 'DeliveryAddress', DeliveryAddress: name })
          Seterror(response.data)
        }
      })
  }
  function handlechnage(e) {
    console.log(e)
    SetAddress(e.target.value)
  }
  return (


    <>
      <TextField
        onChange={handlechnage}
        value={Address}
        className={classes.textFieldFocusBorderColor}
        inputRef={ref}
        placeholder="Enter Your Delivery Location"
        variant="outlined"
        fullWidth size='small'
        // onKeyDown={commentEnterSubmit}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RiUserLocationLine />
            </InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">

            {error === 'Not A street Address' || error === 'Not Found' ? <BiErrorCircle className='help-block'></BiErrorCircle> : <IoCheckmarkSharp />}

          </InputAdornment>
        }}
        error={Boolean(error === 'Not A street Address' || error === 'Not Found')}
      />
      {
        error !== "" && <span className="help-block">{error}</span>
      }
    </>
  )

}
