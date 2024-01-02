import React, { useState } from 'react';

const Pay = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="bg-gray-100 font-sans flex h-screen items-center justify-center">
      <div className="p-8">
        <div className="max-w-md mx-auto">
          <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
            <button
              onClick={() => setOpenTab(1)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-orange transition-all duration-300 ${
                openTab === 1 ? 'bg-orange-600 text-white' : 'bg-white text-black-600'
              }`}
            >
              Bizum
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-orange transition-all duration-300 ${
                openTab === 2 ? 'bg-orange-600 text-white' : 'bg-white text-black-600'
              }`}
            >
              Transferencia 
            </button>
            <button
              onClick={() => setOpenTab(3)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-orange transition-all duration-300 ${
                openTab === 3 ? 'bg-orange-600 text-white' : 'bg-white text-black-600'
              }`}
            >
              Tarjetas
            </button>
          </div>

          <div
            className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${
              openTab === 1 ? 'border-orange-600' : 'border-white'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2 text-orange-600">Bizum</h2>
            <p className="text-gray-700">Bizum es un servicio de pago móvil en España que permite a los usuarios realizar transferencias de dinero de manera rápida y segura a través de sus dispositivos móviles. </p>
          </div>

          <div
            className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${
              openTab === 2 ? 'border-orange-600' : 'border-white'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2 text-orange-600">Transferencia</h2>
            <p className="text-gray-700">Una transferencia bancaria es un método de mover dinero de una cuenta bancaria a otra. En este proceso, el titular de una cuenta autoriza a su banco a transferir fondos a otra cuenta, ya sea dentro de la misma institución financiera o en otra diferente.</p>
          </div>

          <div
            className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${
              openTab === 3 ? 'border-orange-600' : 'border-white'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2 text-orange-600">Tarjetas</h2>
            <p className="text-gray-700">Este método de pago es ampliamente utilizado debido a su conveniencia, seguridad y aceptación generalizada en tiendas físicas y en línea. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;

