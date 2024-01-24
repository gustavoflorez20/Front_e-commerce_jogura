import React from 'react';

const ShoppingCar = () => {
  return (
    <div className="relative bg-gradient-to-br from-sky-50 to-gray-200">   
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Tu carrito de compras</h1>
        <p className="text-lg">Tu carrito está vacío.</p>
        <p className="mt-4">
          Explora nuestra tienda y encuentra productos increíbles para agregar a tu carrito.
        </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;


