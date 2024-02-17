import React from 'react';

const Password = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-xl font-semibold mb-4">Ingrese su Correo</h1>
          <p className="text-gray-600 mb-6">Le enviaremos un enlace para restablecer su Contraseña.</p>
          <div className="mb-4">
            <input type="email" placeholder="direccion@email.com" className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500" />
          </div>
          <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Password;
