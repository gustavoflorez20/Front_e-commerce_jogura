import React from 'react'

const Delivery = () => {
  return (
    <div><div className="container mx-auto my-8 p-8 bg-gray-100">
    <div className="text-center text-2xl font-bold text-gray-800 mb-6">Entregas y Recogidas</div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Entrega 1</h3>
        <p className="text-gray-600">Detalles de la entrega...</p>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Entrega 2</h3>
        <p className="text-gray-600">Detalles de la entrega...</p>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recogida 1</h3>
        <p className="text-gray-600">Detalles de la recogida...</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Delivery