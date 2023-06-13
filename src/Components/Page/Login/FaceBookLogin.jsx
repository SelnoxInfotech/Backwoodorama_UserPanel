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
      appId="1930440197330648"
      // authType="Login"
      callback={responseFacebook}
      fields="first_name, last_name, email"
      scope="public_profile, email"
      // appSecret = "d476327ecaf008fbb82e5dbdab23a6d7" 
      // render={renderProps => (
      //     <IoLogoFacebook
      //         onClick={renderProps.onClick}
      //     />
      // )}
      
      />
    )
  
}

export default FaceBookLogin  ;