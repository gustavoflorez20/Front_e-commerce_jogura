import React from "react";
import queso1 from "../Images/QuesodeManoArepero.jpg"
import queso2 from "../images/QuesodeManoFamiliar.jpg"
import queso3 from "../images/QuesodeTrenza.jpg"
import queso4 from "../images/QuesoGuayanes.jpg"
import queso5 from "../images/QuesoTelita.jpg"
import queso6 from "../images/Quesolatino.jpg"
import queso7 from "../images/Quesollaneropeq.webp"
import nata1 from "../images/natacriolla.jpg"
import nata2 from "../images/natacriolla.jpg"
import nata3 from "../images/natacriolla.jpg"

const Lacteos = () => {
  return (
<section className=" bg-gray-100 min-h-screen py-12 flex items-center justify-center">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Queso de Mano
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={queso1}
              alt="Queso de Mano arepero"
            />
            <p className="text-3xl font-bold text-gray-800 mb-10"></p>
            <ul className="text-sm text-gray-600 mb-8"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

     
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Queso Guayanes
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={queso4}
              alt="Queso Guayanes"
            />
            <p className="text-3xl font-bold text-gray-800 mb-10"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

      
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-8">
            <h2 className="text-center text-center text-3xl font-bold text-gray-800 mb-20">
              Queso Telita
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={queso5}
              alt="Queso Telita"
            />
            <p className="text-3xl font-bold text-gray-800 mb-20"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

      
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">Queso Trenza</h2>
            <img
              className="mb-20 w-auto h-auto"
              src={queso3}
              alt="Queso trenza"
            />
            <p className="text-4xl font-bold text-gray-800 mb-20"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

       
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Queso de Mano Familiar
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={queso2}
              alt="Queso de Mano Familiar"
            />
            <p className="text-4xl font-bold text-gray-800 mb-20"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Barra de queso Llanero</h2>
            <img
              className="mb-20 w-auto h-auto"
              src={queso6}
              alt="Barra de queso Llanero"
            />
            <p className="text-4xl font-bold text-gray-800 mb-20"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>
     
    
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Queso llanero 500gr
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={queso7}
              alt="Queso llanero 500gr"
            />
            <p className="text-4xl font-bold text-gray-800 mb-20"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>
       
       
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-20">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Nata Criolla 250ml
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={nata1}
              alt="Nata criolla 250ml"
            />
            <p className="text-4xl font-bold text-gray-800 mb-20"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
              Lo quiero!
            </button>
          </div>
        </div>
        
        
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-20">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Nata Criolla 500ml
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={nata2}
              alt="Nata Criolla 500ml"
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
        
       
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-gray-200"></div>
          <div className="p-20">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
              Nata Criolla 1000ml
            </h2>
            <img
              className="mb-20 w-auto h-auto"
              src={nata3}
              alt="Nata Criolla 1000ml"
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
    </section>
  );
};

export default Lacteos;
