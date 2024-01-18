import React, { useState } from 'react';
import Logo from '../Images/LOGO2.PNG';


export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar o procesar los datos del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">   
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className='flex flex-col items-center space-y-4'>
            <img className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full" src={Logo} alt='Logo Tequetapas' />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
              <div className='flex '>
                <div className="mb-4">
                <label htmlFor="firstName" className="block text-2xl font-medium text-gray-900">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              </div>
              

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-2xl font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-2xl font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-2xl font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-2xl font-medium text-gray-700">
                  Dirección de Envío
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  rows="1"
                  required
                ></textarea>
              </div>
        
              <button
            type="submit"
            className=" h-12 px-8 bg-orange-500 border-8 border-orange-500 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800"
>
            Enviar Registro
          </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
// text-2xl group h-12 px-6 bg-orange-500 border-2 border-orange-500 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800