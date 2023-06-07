import React from 'react';
import FacebookLogin from 'react-facebook-login';

class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="646623577524485"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
      />
    )
  }
}

export default MyComponent;