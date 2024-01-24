import React from 'react'

const Atc = () => {
  return (
    <div>
      <div className="container mx-auto my-20 p-10 bg-gray-100">
        <div className="text-center text-2xl font-bold text-gray-900 mb-10">Atención al Cliente</div>

        <div className="p-6 bg-white rounded shadow-md">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-4">Nombre:</label>
              <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded" required />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo electrónico:</label>
              <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded" required />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje:</label>
              <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded" required></textarea>
            </div>

            <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 cursor-pointer">
              Enviar
            </button>
          </form>
        </div>
      </div>








    </div>
  )
}

export default Atc