import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const MapContainer = (props) => {


    console.log(props)



    const mapStyles = {
        width: '100%',
        height: '100%',
      };

    return(
        <div>
            <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 33.448513, lng: -112.074012}}
        >

            <Marker position={{ lat: 33.448513, lng: -112.074012}} />
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`
  })(MapContainer)