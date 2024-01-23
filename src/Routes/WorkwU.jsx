import React from 'react'

const WorkwU = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100">
      <div className="text-center text-2xl font-bold text-gray-800 mb-6">Trabaja con Nosotros</div>

      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre:</label>
            <input type="text" id="nombre" name="nombre" className="w-full p-3 border border-gray-300 rounded" required />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-bold mb-2">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" className="w-full p-3 border border-gray-300 rounded" required />
          </div>

          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" className="w-full p-3 border border-gray-300 rounded" required></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="curriculum" className="block text-gray-700 font-bold mb-2">Adjuntar Currículum:</label>
            <input type="file" id="curriculum" name="curriculum" className="w-full p-3 border border-gray-300 rounded" />
            <p className="text-sm text-gray-500">Adjunta tu currículum en formato PDF o Word.</p>
          </div>

          <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-blue-600 cursor-pointer">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default WorkwU