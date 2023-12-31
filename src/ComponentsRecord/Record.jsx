import React, { useState } from 'react';

const Record = () => {
  const [formData, setFormData] = useState({
    fullNameNombre: '',
    email: '',
    password: '',
  });

  const formFields = [
    { id: 'fullNameNombre', label: 'Nombres', type: 'text', placeholder: 'Tequetapas Madrid' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'micorreo@gmail.com' },
    { id: 'password', label: 'Clave', type: 'password', placeholder: '••••••••', description: 'Debe contener 1 letra mayúscula, 1 número, mín. 8 caracteres.' },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor.
  };

  return (
    <div>
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
            </svg>
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Crea una cuenta nueva.</h2>
        <p className="text-white-600 text-center mb-6">Ingresa tus datos para registrarte.</p>
        <form>
          {formFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={field.id} className="block text-white-700 text-sm font-semibold mb-2">
                {field.label} *
              </label>
              <input
                type={field.type}
                id={field.id}
                className="form-input w-full px-4 py-2 border rounded-lg text-white-700 focus:ring-blue-500"
                required
                placeholder={field.placeholder}
              />
              {field.description && (
                <p className="text-white-600 text-xs mt-1">{field.description}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Registro
          </button>
          <p className="text-white-600 text-xs text-center mt-4">
            Al hacer clic en Registrarse, acepta las condiciones.
            <a href="#" className="text-blue-500 hover:underline">
              Términos y condiciones
            </a>
            .
          </p>
        </form>
      </div>
    </div>

    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      {/* Resto del código ... */}
    </div>
    </div>
  );
};

export default Record;