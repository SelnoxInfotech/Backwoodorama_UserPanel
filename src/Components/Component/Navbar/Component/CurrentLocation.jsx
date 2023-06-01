import React from "react";
import Geocode from "react-geocode";
const CurrentLocation = () => {
    Geocode.setApiKey("AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE");
    Geocode.enableDebug();
    const location = window.navigator && window.navigator.geolocation
    if (location) {
        location.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude)
            // Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
            //     response => {
            //         const address = response.results[0].formatted_address;
            //         console.log(address);
            //     },
            //     error => {
            //         console.error(error);
            //     }
            // );


            // fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + position.coords.latitude + ',' + position.coords.longitude + '&key=' + 'AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE')
            // .then((response) => response.json())
            //     .then((responseJson) => {
            //     // alert('error')
            //     console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
    // })


        })
    }


    return (
        <>

        </>
    )
}

export default CurrentLocation