import React, { useState } from 'react';
import axios from "axios";

const Profile = () => {
  const [formData, setFormData] = useState({
  });

  const [isRegistered, setIsRegistered] = useState(true);

  const handleChange = (e) => {
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Formulario enviado:", formData);
    setIsRegistered(true);
  };

  const postUser = async () => {
    try {
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmitRegister}>
      <div className="container mx-auto my-8 p-8 bg-gray-100">
        <div className="relative container m-auto px-6 text-gray-600 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl ">
              <div className="p-6 sm:p-20 ">
                <div className=" grid space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <img className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full"
                    src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706447831/LogoTequetapas_znf13d.jpg"
                    alt="Logo Tequetapas" />
                  <h2 className="text-center text-4xl text-gray-900 font-bold">
                    Mi Perfil</h2>
                </div>

                <div className="mt-16 grid space-y-4">
                  <label
                    htmlFor="firstName"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Nombre:
                  </label>
                  <input
                    type="string"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded-md"
                    required
                    disabled={isRegistered}  // Deshabilita el campo si isRegistered es true
                  />
                </div>


                <div className="mt-16 grid space-y-4">
                  <label
                    htmlFor="lastName"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Apellido:
                  </label>
                  <input
                    type="string"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded-md"
                    required
                    disabled={isRegistered}  // Deshabilita el campo si isRegistered es true
                  />
                </div>

                <div className="mt-16 grid space-y-4">
                  <label
                    htmlFor="email"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Email:
                  </label>
                  <input
                    type="string"
                    id="email"  // <-- Corregir el id a "email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded-md"
                    required
                    disabled={isRegistered}  // Deshabilita el campo si isRegistered es true
                  />
                </div>


                <div className="mt-16 grid space-y-4">
                  <label
                    htmlFor="phone"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Teléfono:
                  </label>
                  <input
                    type="string"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div className="mt-16 grid space-y-4">
                  <label
                    htmlFor="address"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Domicilio:
                  </label>
                  <input
                    type="string"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mt-16 grid space-y-4">
                  <label
                    htmlFor="newPassword"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Nueva Contraseña:
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mt-16 grid space-y-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Confirmar Contraseña:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="text-lx font-semibold leading-6 text-2xl text-white">
                  <button
                    onClick={postUser}
                    type="submit"
                    className="h-12 px-8 bg-orange-600 border-8 border-orange-600 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800"
                  >Guardar Cambios
                  </button>
                </div>


                <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">Al proceder, usted acepta nuestra <a href="/terminos" className="underline">Condiciones de uso</a> y confirma que has leído nuestra <a href="/cookies" className="underline">Declaración de privacidad y cookies</a>.</p>
                  <p className="text-xs">Este sitio está protegido por reCAPTCHA y el <a href="/politicas" className="underline">Política de privacidad de Google</a> y <a href="/terminos" className="underline">Términos de servicio</a> aplicar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);
}

export default Profile;
