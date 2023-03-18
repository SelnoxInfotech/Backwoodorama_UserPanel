import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
export default function MapContainer () {

<>
<script>
      var  initMap = function(){}
      </script>
    
      <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU&callback=initMap">
      </script>

</>
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 23.259933,
        lng: 77.412613
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  
  return (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          >
            <Marker  position={locations.location1}/>
       
     </GoogleMap>
  )
    
      
}