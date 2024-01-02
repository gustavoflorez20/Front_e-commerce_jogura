import React from 'react'
import './Promotion.css'

const Promotion = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
      {/* <!-- Pricing Card 1 --> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-orange-200">
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Promo Super Queso</h2>
          <p className="text-gray-600 mb-6">Perfecto para Degustar</p>
          <p className="text-4xl font-bold text-gray-800 mb-6">35€</p>
          <ul className="text-sm text-gray-600 mb-6">
            <li className="mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              35 Unidades
            </li>
            <li className="mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              Envio no Incluido
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              24/72H Entrega
            </li>
          </ul>
        </div>
        <div className="p-4">
          <button
           className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
           Pide Aqui
          </button>
        </div>
      </div>
  
      {/* <!-- Pricing Card 2 --> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-orange-200">
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Full Nutella</h2>
          <p className="text-gray-600 mb-6">Prueba algo Diferente</p>
          <p className="text-4xl font-bold text-gray-800 mb-6">49€</p>
          <ul className="text-sm text-gray-600 mb-6">
            <li className="mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
            85 Unidades
            </li>
            <li className="mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              Envio no incluido
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              24/72H Entrega
            </li>
          </ul>
        </div>
        <div className="p-4">
          <button
            className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
            Pide Aqui
          </button>
        </div>
      </div>
  
      {/* <!-- Pricing Card 3 --> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="p-1 bg-orange-200">
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Platano Macho</h2>
          <p className="text-gray-600 mb-6">El Favorito</p>
          <p className="text-4xl font-bold text-gray-800 mb-6">99€</p>
          <ul className="text-sm text-gray-600 mb-6">
            <li className="mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
             65 Unidades
            </li>
            <li className="mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500"fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http
  
  ://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
             Envio Incluido
            </li>
            <li className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              24/72H Entrega
            </li>
          </ul>
        </div>
        <div className="p-4">
          <button
            className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
            Pide Aqui
          </button>
        </div>
      </div>
  
    </div>
  </div>

)
}

export default Promotion