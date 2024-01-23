import React, { useState } from 'react';
import Logo from '../Images/LogoTequetapas.PNG';


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
    
    <div className="relative py-20 bg-gradient-to-br from-sky-50 to-gray-200">   
      <div className="relative container m-auto px-20 text-gray-500 px-20 xl:px-20">
        <div className="m-auto md:w-10/12 lg:w-10/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className='flex flex-col items-center space-y-4'>
            <img className="flex" src={Logo} alt='Logo Tequetapas' />
            </div>
            <h2 className="text-gray-900 text-3xl font-bold mb-4 text-center">Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
              
              
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
                <label htmlFor="dateOfBirth" className="block text-2xl font-medium text-gray-700">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
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
                <label htmlFor="countryRegion" className="block text-2xl font-medium text-gray-700">
                  País
                </label>
                <input
                  type="text"
                  id="countryRegion"
                  name="countryRegion"
                  value={formData.countryRegion}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postalCode" className="block text-2xl font-medium text-gray-700">
                  Código Postal
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="stateProvince" className="block text-2xl font-medium text-gray-700">
                  Estado/Provincia
                </label>
                <input
                  type="text"
                  id="stateProvince"
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="locality" className="block text-2xl font-medium text-gray-700">
                  Localidad
                </label>
                <input
                  type="text"
                  id="locality"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-2xl font-medium text-gray-700">
                  Dirección de Domicilio
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
            className=" mt-10 ml-60 h-16 px-8 bg-orange-500 border-8 border-orange-500 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800"
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
