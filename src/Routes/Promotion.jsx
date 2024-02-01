import React from 'react';


const Promotion = () => {
  const handleBuyClick = (productName) => {
    // Implementa lógica para manejar el clic en el botón de comprar
    console.log(`Producto comprado: ${productName}`);
  };

  const productos = [
    {
      name: "Promocion Black Friday 💰",
      price: "Precio: 25,00€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706735859/259865970_1836226799898814_5758383520203664088_n_terzmr.jpg",
      shortDescription: "No dejes pasar esta Promocion Black Friday"
    },
    {
      name: "Promocion Vuelta al Cole 🎅",
      price: "Precio: 42,00€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706741016/promocion2_vuf75p.jpg",
      shortDescription: "Feliz Navidad"
    },
 
  ];

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="p-1 bg-orange-600"></div>
            <div className="p-8 ">
              <p className="ml-80 text-2xl font-bold text-gray-800 mb-3 mt-10">{producto.price}</p>
              <h2 className="ml-12 text-3xl font-bold text-gray-800 mb-3">
                {producto.name}
              </h2>
              <img
                className="mb-6 w-full h-auto"
                src={producto.image}
                alt={producto.name}
              />
            </div>
            <div>
            <h2 className="text-xl text-gray-600 mb-6 text-gray-800 text-center  ">{producto.shortDescription}</h2>
            </div>
            
            <div className="p-2 flex justify-center items-center mb-6">
              <button
                onClick={() => handleBuyClick(producto.name)}
                className="w-1/2 bg-orange-600 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800 mr-2"
              >
                Comprar
              </button>
            </div>
          
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
