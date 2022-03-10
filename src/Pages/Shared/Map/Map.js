import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  height: "400px",
};

const center = {
  lat: 23.810331,
  lng: 90.412521,
};

const Map = () => {
    return (
        <div>
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
    );
};

export default Map;