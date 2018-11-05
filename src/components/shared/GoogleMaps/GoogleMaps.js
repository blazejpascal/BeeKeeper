import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 50.9087219, lng: 15.3431045 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 50.9087219, lng: 15.3431045 }} />}
  </GoogleMap>
))

export default MyMapComponent