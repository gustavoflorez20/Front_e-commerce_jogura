import React, { useContext } from "react";
import { ProductoContext } from "../Routes/Cant";
import productos from "./ProductsFrozen";





const Frozen = () => {
 
  const {  seleccionarProducto ,addition,  } = useContext(ProductoContext);

  const handleButtonClick = (action, producto) => {
  if (action === "select") {
      seleccionarProducto(producto);
      addition();
    }
  };

 

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map(({ id, name, image, price, shortDescription }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <figure>
              <div className="p-1 bg-orange-600"></div>
              <div className="p-8 ">
                <p className="ml-12 text-2xl font-bold text-gray-800 mb-3 mt-10">
                  {name}
                </p>

                <img
                  className="mb-6 w-full h-auto"
                  src={image}
                  alt={name}
                />
                <h2 className="ml-12 text-2xl font-bold text-gray-800 mb-3">
                  <p>Precio {price}</p>
                </h2>
              </div>
              <div>
                <h2 className="text-xl text-gray-600 mb-6 text-gray-800 text-center  ">
                  {shortDescription}
                </h2>
              </div>
            </figure>

            <div className="p-2 flex justify-center items-center mb-6">
              <button
                className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
                onClick={() => handleButtonClick("select", { id, name, image, price, shortDescription })}>
                 {/* <button style={{ marginRight: "80px" }}>+</button>  */}
                <button>Pruebalo</button>
                 {/* <button style={{ marginLeft: "80px" }}>-</button>  */}
                   
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frozen;
