import React from "react";

const Lacteos = () => {
  // const handleQuantityChange = (product) => {
  //   // Implementa lógica para manejar cambios en la cantidad del producto
  //   console.log(`Cantidad seleccionada para ${product} cambió`);
  // };

  const handlePriceClick = (product) => {
    // Implementa lógica para manejar el clic en el precio del producto
    console.log(`Precio de ${product} clickeado`);
  };

  const productos = [
    {
      
      name: "Queso de Mano", 
      price: "7,50€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706129668/QuesodeManoArepero_qdzfcf.jpg",
    },
    {
      name: "Queso Guayanes",
      price: "7,50€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706047080/QuesoGuayanes_zfrjga.jpg",
    },
    {
      name: "Queso Telita",
      price: "7,50€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706047084/QuesoTelita_t8caat.jpg",
    },
    {
      name: "Nata Criolla",
      price: "4,50",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706047073/nata_dlmsw7.jpg",
    },
  ];

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="p-1 bg-orange-600"></div>
            <div className="p-8 items-center ">
              {/* Precio */}
              <p className="text-2xl font-bold text-gray-800 mb-3 ">{producto.price}</p>
              {/* Título */}
              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                {producto.name}
              </h2>

              <img
                className="mb-6 w-full h-auto"
                src={producto.image}
                alt={producto.name}
              />
              <ul className="text-sm text-gray-600 mb-6"></ul>
            </div>
            <div className="p-4 flex justify-center items-center">
              {/* Botón de Comprar */}
              <button
                className="w-1/2 bg-orange-600 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800 mr-2"
              >
                Comprar
              </button>
              
              {/* Botón de Cantidades */}
              {/* <button
                onClick={() => handleQuantityChange(producto.name)}
                className="w-1/2 bg-orange-600 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
              >
                Cantidades
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lacteos;