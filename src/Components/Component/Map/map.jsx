import { Map, GoogleApiWrapper, Marker,  } from 'google-maps-react';
import googleMapStyles from "./MapStyle"


export function MapContainer(props) {
  const locations = [
    { latitude: 40.712776, longitude: -74.005974, name: 'First Marker' },
    { latitude: 47.5524675, longitude: -122.0425407, name: 'First Marker' }]
    
  const displayMarkers = () => {

    return locations.map((store, index) => {
      return (<Marker key={index} id={index}

        position={{
          lat: store.latitude,
          lng: store.longitude,
        }}
        title="title"

        onClick={() => console.log("You clicked me!")}
      />)
    })
  }

   function _mapLoaded(mapProps, map) {
      map.setOptions({
         styles:props.Theme
      });
   }
  

  return (

    <div className='container-fluid'>
      <div className='row center'>
        <div className='col-12 center ' >
        
          <Map
            style={{ height: props.height  ,  backgroundColor: 'black'}}
            google={window.google}
            mapTypeId= "google.maps.MapTypeId.ROADMAP"
            zoom={14}
            streetViewControl= {true}
            fullscreenControl= {false}
            onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
          >
            {displayMarkers()}
          </Map>
        </div>
      </div>
    </div>

  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU'
})(MapContainer);