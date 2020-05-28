import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';



const MapContainer = (props) => {
    const [breweries, setBreweries] = useState([])
    console.log('state', breweries)

    console.log('props', props)
    useEffect(() => {
      axios.get(`https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?rapidapi-key=${process.env.REACT_APP_BREWERY_API}`).then(res => {
        console.log('useEffect', res.data)
        setBreweries(res.data)
      })
        
    }, [])

    // console.log(props)

const displayMarkers = () => {
  return breweries.map((brewery, i) => {
    console.log('displayMarkers', brewery)
    return <Marker key={brewery.id} position={{
      lat: brewery.latitude,
      lng: brewery.longitude
    }}/>
  })
}

    const mapStyles = {
        width: '50%',
        height: '50%',
      };


    return(
        <div>
            <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 33.448513, lng: -112.074012}}
        >
          {displayMarkers()}
            {/* <Marker position={{ lat: 33.448513, lng: -112.074012}} /> */}
            </Map>


        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`
  })(MapContainer)