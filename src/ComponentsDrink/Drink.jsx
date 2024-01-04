import React from "react";

const Drink = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Pricing Card 1 --> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Polar Light
            </h2>
            <img
              className="mb-6 w-full h-auto"
              src="https://licomarazul.com/wp-content/uploads/2021/12/75903626.jpg"
              alt="Light"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

        {/* <!-- Pricing Card 2 --> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Malta Light
            </h2>
            <img
              className="mb-6 w-full h-auto"
              src="https://domidelivery.store/cdn/shop/products/malta-maltin-polar-light-15l-577076.jpg?v=1679953743"
              alt="Malta"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

        {/* <!-- Pricing Card 3 --> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Solera Light
            </h2>
            <img
              className="mb-6 w-full h-auto"
              src="https://licomarazul.com/wp-content/uploads/2021/12/75919306.jpg"
              alt="Fanta"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

        {/* <!-- Pricing Card 4 --> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Polarcita</h2>
            <img
              className="mb-6 w-full h-auto"
              src="https://daghidelivery.com/cdn/shop/products/cervezapolar_1024x1024@2x.jpg?v=1643400080"
              alt="Polarcita"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

        {/* <!-- Pricing Card 3 --> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Malta Maltin</h2>
            <img
              className="mb-6 w-full h-auto"
              src="https://www.supergarzon.com/site/lasamericas/4194-large_default/malta-maltin-polar-1i5lt.jpg"
              alt="Malta Maltin"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

        {/* <!-- Pricing Card 5 --> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Zulia</h2>
            <img
              className="mb-6 w-full h-auto"
              src="https://caprichoslatinos.com/wp-content/uploads/2023/02/cerveza-zulia-caja-1.webp"
              alt="Zulia"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drink;

