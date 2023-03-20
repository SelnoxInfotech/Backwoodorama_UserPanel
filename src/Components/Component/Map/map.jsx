import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';



export function MapContainer(props) {
  const locations = [
    // {lat: 47.49855629475769, lng: -122.14184416996333,  name: 'First Marker'},
    // {lat: 47.49855629475768, lng: -122.14184416996332,  name: 'First Marker'},
    // {latitude: 47.2052192687988, longitude: -121.988426208496,  name: 'First Marker'},
    // {latitude: 47.6307081, longitude: -122.1434325,  name: 'First Marker'},
    { latitude: 40.712776, longitude: -74.005974, name: 'First Marker' },
    { latitude: 47.5524675, longitude: -122.0425407, name: 'First Marker' }]

  const displayMarkers = () => {
    return locations.map((store, index) => {
      return( <Marker key={index} id={index}

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
    <>
      <Map
        style={{ width: '50%', height: '50%', position: 'relative' }}
        google={window.google}
        zoom={14}
        initialCenter={{ lat: 40.712776, lng: -74.005974}}
      >


{displayMarkers()}
{/* <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'Your position'}
    position={{lat: 37.778519, lng: -122.405640}} />
        <InfoWindow
          onOpen={true}

          visible={true}>
          <div>
            <h1>{ }</h1>
          </div>
        </InfoWindow> */}
      </Map>

    </>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU'
})(MapContainer);