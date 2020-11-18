import React from 'react';
import './index.css';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import  { Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import SearchBar from '../SearchBar';
// import Location from '../Location'


const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100wh',
    height: '100vh',
    latitude: 48.866424, 
    longitude: 2.352390,
    zoom: 13,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  const MOVIE1 = [48.869394, 2.355818];


  return (
    <div className="app-map">

    <ReactMapGL
    mapStyle='mapbox://styles/mapbox/streets-v11'
    width="100%"
    height="100%"
    minZoom={2}
    maxPitch={0}
    dragRotate={false}
    mapboxApiAccessToken={MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={nextViewport => 
        setViewport(nextViewport)}
    >

    
    <Marker
    latitude= {MOVIE1[0]}
    longitude = {MOVIE1[1]}
    >
        <button className='marker-btn' onClick={(e) => {
        // e.prevent.default();
        alert('The Tenant')
    }}>
            <img src="../../Assets/svg/placeholder.svg" alt=""/>
        </button>
    </Marker>

    {selectedLocation ? (
        <Popup>
            <div>The Tenant</div>
        </Popup>
    ) : null }
    </ReactMapGL>

    </div>
  );
}

export default Map;