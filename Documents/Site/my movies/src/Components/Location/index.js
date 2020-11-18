import React from "react";

// Imports from react map gl
import { Marker } from 'react-map-gl';

const Location = ({ location, handleClick }) => {
  return (
    <div>
      <div onClick={() => handleClick('open', location)}>
        <Marker latitude={location.latitude} longitude={location.longitude}>
        </Marker>
      </div>
    </div>
  );
};

