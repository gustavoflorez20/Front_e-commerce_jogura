import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  // Estado para almacenar la información del perfil
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    email: '',
    address: '', // Nueva adición: dirección de domicilio
    age: '',     // Nueva adición: edad
    // Agrega más campos según sea necesario
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar la información del perfil al servidor
    console.log('Información del perfil:', profileInfo);
  };

  return (
    <div>
      <div className="relative bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-20">
                <div className="grid space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <img
                      src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706447831/LogoTequetapas_znf13d.jpg"
                      className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full"
                      alt="Logo Tequetapas"
                    />
                    <h2 className="text-center text-2xl text-gray-900 font-bold">
                      Perfil de Usario
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mt-16 grid space-y-4 text-gray-900">
                      <label>
                        Nombre:
                        <input
                          type="text"
                          name="name"
                          value={profileInfo.name}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <div className="mt-16 grid space-y-4 text-gray-900">
                      <label>
                        Apellidos:
                        <input
                          type="text"
                          name="lastName"
                          value={profileInfo.name}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <div className="mt-16 grid space-y-4 text-gray-900">
                      <label>
                        Edad:
                        <input
                          type="number"
                          name="age"
                          value={profileInfo.age}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <div className="mt-16 grid space-y-4 text-gray-900">
                      <label>
                        Correo Electrónico:
                        <input
                          type="email"
                          name="email"
                          value={profileInfo.email}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <div className="mt-16 grid space-y-4 text-gray-900">
                      <label>
                        Dirección de Domicilio:
                        <input
                          type="text"
                          name="address"
                          value={profileInfo.address}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    
                    <button>
                    <Link to="/" className="text-lx font-semibold leading-8 text-2xl text-white ">
                      <h2 className="h-12 px-8 bg-orange-600 border-8 border-orange-600 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800">
                        Guardar</h2>
                    </Link>
                  </button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profile;
