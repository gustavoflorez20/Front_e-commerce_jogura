import React from "react";

const Frozen = () => {
  const handleBuyClick = (productName) => {
    // Implementa lógica para manejar el clic en el botón de comprar
    console.log(`Producto comprado: ${productName}`);
  };

  const productos = [
    {
      name: "Tequeño Tradicional 🥰",
      price: "Precio: 35,00€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706047091/teque%C3%B1oOriginal_rcnvg1.jpg",
      shortDescription: "Nada como compartir en familia por eso! Te traemos esta presentacion con 85ud."
    },
    {
      name: "Tequeños Chococale 😌",
      price: "Precio: 32,00€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706735859/Teque%C3%B1oChocolate_pgbide.jpg",
      shortDescription: "Eres Amante del chocolate, porque dejar atras un gustito."
    },
    {
      name: "Tequeños Platano 🤤",
      price: "Precio: 32,00€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706735859/Teque%C3%B1oPlatanoMacho2_nlfq1j.jpg",
      shortDescription: "Te dejo por aqui un sabor increible."
    },
    {
      name: "Tequeño de Maiz 😍",
      price: "Precio: 32,00€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706736267/Teque%C3%B1oMaizDulce3_woelvj.jpg",
      shortDescription: "Maiz y Queso, la mejor combinación.",
    },
    {
      name: "Cachapas con Queso 😏",
      price: "Precio: 4,50€",
      image: "https://res.cloudinary.com/djkxqbsns/image/upload/v1706735859/CachapaConQueso_sjixuz.jpg",
      shortDescription: "No dejes pasar esta delicia."
    },
    {
      name: "Cachito Jamon 🥰",
      price: "Precio: 27,00€",
      image: "https://scontent.fmad22-1.fna.fbcdn.net/v/t1.6435-9/164059961_1652867384901424_8254027222998946438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=810d5f&_nc_ohc=NHTS-G2rAT0AX8Iag7Q&_nc_ht=scontent.fmad22-1.fna&oh=00_AfBq1HsMrCNVTTtC9xVdyHKpTIa_rhjttCIitFMc9EAzKw&oe=65BE860F",
      shortDescription: "Quieres recordar tus desayunos? 20ud."
    },


  ];

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="p-1 bg-orange-600"></div>
            <div className="p-8 ">
              <p className="ml-56 text-2xl font-bold text-gray-800 mb-3 mt-10">{producto.price}</p>
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

export default Frozen;