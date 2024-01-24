import React from 'react';
import '../Styles/Promotion.css';

const Promotion = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
  
  {/* Promocion 1 */}
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
  <div className="p-1 bg-orange-500"></div>
  <div className="p-8">
    <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">Promo 1</h2>
    
    <img
      className="mb-80 w-80 h-auto"
      src="" 
      alt="Promo1"
    />
    <p className="text-4xl font-bold text-gray-800 mb-6"></p>
    <ul className="text-sm text-gray-600 mb-6">
     </ul>
  </div>
  <div className="p-4">
    <button
      className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
     Pide Aqui
    </button>
  </div>
</div>
 {/* Promocion 2 */}
 <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
  <div className="p-1 bg-orange-500"></div>
  <div className="p-8">
    <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">Promo 2</h2>
    
    <img
      className="mb-80 w-80 h-auto" 
      src=" "
      alt="Promo2"
    />
    <p className="text-4xl font-bold text-gray-800 mb-6"></p>
    <ul className="text-sm text-gray-600 mb-6">
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

export default Promotion;
