import { Map, GoogleApiWrapper, Marker,  } from 'google-maps-react';
import googleMapStyles from "./MapStyle"


export function MapContainer(props) {
 
  const locations = [
    { latitude: 40.712776, longitude: -74.005974, name: 'First Marker' },
    { latitude: 47.5524675, longitude: -122.0425407, name: 'First Marker' }]
    
  const displayMarkers = () => {
    console.log(googleMapStyles.light)
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

  return (

    <div className='container-fluid'>
      <div className='row center'>
        <div className='col-12 center ' >
        
          <Map
            style={{ height: '300px'  ,  backgroundColor: 'black'}}
            google={window.google}
            mapTypeId= "google.maps.MapTypeId.ROADMAP"
            zoom={14}
            initialCenter={{ lat: 40.712776, lng: -74.005974 }}
            streetViewControl= {true}
            fullscreenControl= {false}
            options={{ styles :googleMapStyles.light }}
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