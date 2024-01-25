import React from "react";


const Frozen = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* <!-- Pricing Card 1 --> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="p-1 bg-orange-200"></div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Tequeño Tradicional
          </h2>

          <img
            className="mb-6 w-full h-auto" 
            src="https://scontent.fmad22-1.fna.fbcdn.net/v/t39.30808-6/223643901_1745312475656914_7048288701235607891_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=YsapUlPZ18IAX-lVGSG&_nc_ht=scontent.fmad22-1.fna&oh=00_AfABhZsgeY_khjUXWEB4mE6L0c89ueqNwZdKB2bG69sBJQ&oe=65A89204" 
            alt="Tequeño Tradiconal"
          />
          <p className="text-4xl font-bold text-gray-800 mb-6"></p>
          <ul className="text-sm text-gray-600 mb-6"></ul>
        </div>
        <div className="p-4">
          <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
            Pruebalo!
          </button>
        </div>
      </div>
      {/* <!-- Pricing Card 2 --> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="p-1 bg-orange-200"></div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Tequeños de Chocolate y Avellanas
          </h2>

          <img
            className="mb-6 w-full h-auto" 
            src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706047085/Teque%C3%B1oChocolate_rqq2vi.jpg" 
            alt="Tequeños de Chocolate"
          />
          <p className="text-4xl font-bold text-gray-800 mb-6"></p>
          <ul className="text-sm text-gray-600 mb-6"></ul>
        </div>
        <div className="p-4">
          <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
            Pruebalo!
          </button>
        </div>
      </div>
      {/* <!-- Pricing Card 3 --> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="p-1 bg-orange-200"></div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Tequeños Platano{" "}
          </h2>

          <img
            className="mb-6 w-full h-auto" 
            src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706130180/teque%C3%B1oplatanotequetapas_qa9x7b.jpg" 
            alt="Tequeyoyo"
          />
          <p className="text-4xl font-bold text-gray-800 mb-6"></p>
          <ul className="text-sm text-gray-600 mb-6"></ul>
        </div>
        <div className="p-4">
          <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
            Pruebalo!
          </button>
        </div>
      </div>

      {/* <!-- Pricing Card 4 --> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="p-1 bg-orange-200"></div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Cachito Jamon 
          </h2>

          <img
            className="mb-6 w-full h-auto" 
            src="https://scontent.fmad22-1.fna.fbcdn.net/v/t1.6435-9/164059961_1652867384901424_8254027222998946438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=810d5f&_nc_ohc=NHTS-G2rAT0AX8Iag7Q&_nc_ht=scontent.fmad22-1.fna&oh=00_AfBq1HsMrCNVTTtC9xVdyHKpTIa_rhjttCIitFMc9EAzKw&oe=65BE860F" 
            alt="Cachito Jamon"
          />
          <p className="text-4xl font-bold text-gray-800 mb-6"></p>
          <ul className="text-sm text-gray-600 mb-6"></ul>
        </div>
        <div className="p-4">
          <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
            Pruebalo!
          </button>
        </div>
      </div>
  
      

      
      
    </div>
    </div>
    
  );
};

export default Frozen;
