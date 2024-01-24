import React from "react";
import teque1 from "../Images/tequeñoOriginal.jpg";
import teque2 from "../Images/TequeñoChocolate.jpg"
import teque3 from "../Images/TequeñoGuayabaYQueso.png"
import teque4 from "../Images/TequeñoPlatanoMacho.Jpeg"
import teque5 from "../Images/TequeñoMaizDulce.jpg"
import cacha from "../Images/CachapaConQueso.jpg"



const Frozen = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* <!--Primer Producto--> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
              Tequeño Tradicional
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src={teque1}
              alt="Tequeño Tradicional"
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

        {/* <!--Segundo Producto--> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
              Tequeños de Chocolate y Avellanas
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src={teque2}
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

        {/* <!--Tercer Producto--> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
              Tequeños Platano{" "}
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src={teque4}
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

        {/* <!--Cuarto Producto--> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
              Tequeño de Maiz Dulce
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src={teque5}
              alt="Teque Maiz"
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

        {/* <!--Quinto Producto--> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
              Tequeño de Guayaba y Queso
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src={teque3}
              alt="Teque Guaya"
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

        {/* <!--Sexto Producto--> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
              Tequeño Tradicional Vegano
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src={teque1}
              alt="Teque Vegano"
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

        {/* <!--Sectimo Producto--> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
              Cachapas
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src={cacha}
              alt="Cachapitas"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Pruebalo!
            </button>
          </div>

          {/* <!--Octavo Producto--> */}
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-20">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">
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
