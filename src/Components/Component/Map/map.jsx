import { GoogleMap, Marker, withGoogleMap } from "react-google-maps"

const Map = withGoogleMap((props) => 
   <GoogleMap {...props} />,
   <Marker
   position={{ lat: -34.397, lng: 150.644 }}
 />
)
export default Map; 