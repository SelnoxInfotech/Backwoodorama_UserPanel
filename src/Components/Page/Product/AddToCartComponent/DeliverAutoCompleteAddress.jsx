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
  const [Address, SetAddress] = React.useState(()=>{
       const g =  state.DeliveryAddress
     return  g === "" ? '' : g
  })

  const [error, Seterror] = React.useState()
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU',
    onPlaceSelected: (place) => {
      if (place.address_components) {
        try {
          for (var i = 0; i < place?.address_components.length; i++) {
            var component = place.address_components[i];
            if (component.types.indexOf('postal_code') !== -1 || component.types.indexOf('street_number') !== -1) {
              CheckPostal(component.long_name, place.formatted_address)
              SetAddress(place.formatted_address)
              dispatch({ type: 'DeliveryAddress', DeliveryAddress: place.formatted_address })
              break;
            }
            else {
              dispatch({ type: 'DeliveryAddress', DeliveryAddress: place.formatted_address })
              Seterror("not Street Address")
              SetAddress(place.formatted_address)
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



  function CheckPostal(data, name) {
    Axios.post(`https://api.cannabaze.com/UserPanel/Get-GetDeliveryCheck/`,
      {
        "PinCode": data
      }
    )

      .then(response => {
        if (response.data === "Not Found") {
          SetAddress(name)
          Seterror('Not A street Address')
          dispatch({ type: 'DeliveryAddress', DeliveryAddress: '' })
        }
        else {
          SetAddress((name)=>{
            return name
          })
          dispatch({ type: 'DeliveryAddress', DeliveryAddress: name })
          Seterror(response.data)
        }
      })
  }
  function handlechnage(e) {
    SetAddress(e.target.value)
  }
  return (
    <React.Fragment>
      <TextField
        onChange={handlechnage}
        value={Address}
        className={classes.textFieldcartsummeryPage}
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
    </React.Fragment>
  )

}
