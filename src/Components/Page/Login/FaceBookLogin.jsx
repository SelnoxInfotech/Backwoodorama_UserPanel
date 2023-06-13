import { Button } from '@mui/material';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io';
  const FaceBookLogin = () => {

    const responseFacebook = (response) => {
      console.log('response >>>', response);
      // if (response.status === 'unknown' || response.status === undefined || response.error)
      //     return thirdPartyLoginHandler({ error: true, provider: 'facebook', response: {} })

      // thirdPartyLoginHandler({ error: false, provider: 'facebook', response })
  }

    return (
      <FacebookLogin
      appId="218951724397904"
      // authType="Login"
      callback={responseFacebook}
      fields="name, email"
      scope="public_profile, email"
      render={renderProps => (
          // <IoLogoFacebook
          //     onClick={renderProps.onClick}
          // 
          <Button>ssss</Button>
      )}
      
      />
    )
  
}

export default FaceBookLogin  ;