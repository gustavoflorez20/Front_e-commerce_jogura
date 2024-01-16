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
          <MapContainer center={location} zoom={5}>
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={location}>
              <Popup>
                <div>
                  <h2>Sede Madrid</h2>
                  <p className="font-extrabold">Tequetapas</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>

          <div>
            <div className="text-center gap-4 mt-4 mr-10 font-bold mt-8 ">
              <h1>Descubre donde estamos.</h1>
            </div>
            <div>
              <br />
              <br />
              <br />
              <br />

              <div className="button-group ml-6 mr-6  shadow-md shadow-orange-400">
                <div className="mb-4">
                  <h1>Tequetapas Foods Madrid</h1>
                  <p>
                    Dirección: Calle Fundicion 18, 28522 - Rivas Vaciamadrid, Madrid
                  </p>
                  <p>Teléfono: 664 01 86 27</p>
                  <br />
                  <button
                    className="font-bold text-white"
                    onClick={() =>
                      changeLocation(40.30140963672347, -3.4382311333776467)
                    }
                  >
                    Madrid
                  </button>
                </div>

                <div className="mb-4  ">
                  <p>Tequetapas Valencia</p>
                  <p>
                    Dirección: C. del Pilar, 7, 28500 Arganda del Rey, Madrid
                  </p>
                  <p>Teléfono: 664 01 86 27</p>
                  <br />
                  <button
                    className="font-bold text-white"
                    onClick={() =>
                      changeLocation(39.45922312927069, -0.3739818288356553)
                    }
                  >
                    Valencia
                  </button>
                </div>

                <div className="mb-4">
                  <p>Tequetapas Barcelona</p>
                  <p>
                    Dirección: C. del Pilar, 7, 28500 Arganda del Rey, Madrid
                  </p>
                  <p>Teléfono: 664 01 86 27</p>
                  <br />
                  <button
                    className="font-bold text-white"
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
