import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./UbicationComp.css";
import { useState } from "react";

const ShipmentsComponent = () => {
  const [location, setLocation] = useState({
    lat: 39.57429594915982,
    lng: -3.762048409555219,
  });

  const changeLocation = (lat, lng) => {
    setLocation({
      lat,
      lng,
    });
  };

  return (
    <>
      <div className=" flex">
        
      <div className="map-container">
        <MapContainer center={location} zoom={10}>
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={location}>
            <Popup>
              <div>
                <h2>Sede Madrid</h2>
                <p className="font-extrabold">Que tapas</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>

        <div >
          <div className="text-center gap-4 mt-4 mr-10">
            <h1>Descubre donde estamos.</h1>
            <h2>Pincha aquí</h2>

            <div className="button-group">
              <div>
                <p>tequetapas Madrid</p>
                <button
                  className="font-bold"
                  onClick={() =>
                    changeLocation(40.30140963672347, -3.4382311333776467)
                  }
                >
                  Madrid
                </button>
              </div>

              <div className="font-semibold">
                <p>tequetapas Valencia</p>
                <button
                  className="font-bold"
                  onClick={() =>
                    changeLocation(39.45922312927069, -0.3739818288356553)
                  }
                >
                  Valencia
                </button>
              </div>

              <div>
                <p>tequetapas Barcelona</p>
                <button
                  className="font-bold"
                  onClick={() =>
                    changeLocation(41.38525396691657, 2.1504338404791024)
                  }
                >
                  Barcelona
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ShipmentsComponent;
