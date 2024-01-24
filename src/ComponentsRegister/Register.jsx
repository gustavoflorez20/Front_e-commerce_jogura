import Logo from "../Images/LOGO2.PNG";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    edad: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  // POST AGREGAR USUARIOS//
  // ESTA FUNCION  NO SE IRA A LA CARPETA USE CONTEXT SE QUEDA EN LOCAL STORAGE POR TEMAS DE ACTUALIZACION DE LA PAHGINA Y PODEMOS PERDER LA INFO  EN LA//
  const postUser = async () => {
    try {
      const url = "http://127.0.0.1:3001/User";  // NO TOCAR ESTA VARIABLE, ES LA CONEXION AL SERVER//

      const objectPost = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        password: formData.password,
        edad : formData.edad
      };

      const answer = await axios.post(url, objectPost);
      console.log("Respuesta del servidor:", answer.data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

 
/*   const age = async calculateAge (formData.birthdate);   CALCULO DE LA EDAD
  if (age >= 18) {
    await postUser();
  } else {
    alert('No cumples con la mayoría de edad');
  }
}; */







  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full"
                src={Logo}
                alt="Logo Tequetapas"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">
              Registro de Usuario
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex ">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-2xl font-medium text-gray-900"
                  >
                    Nombres
                  </label>
                  <input
                    type="string"
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
                <label
                  htmlFor="lastName"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Apellidos
                </label>
                <input
                  type="string"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="string"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  type="string"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Dirección de Envío
                </label>
                <textarea
                  type="string"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  rows="1"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Password
                </label>
                <textarea
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  rows="1"
                  required
                ></textarea>
              </div>

              <button
                onClick={postUser}
                type="submit"
                className=" h-12 px-8 bg-orange-500 border-8 border-orange-500 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800"
              >REGISTRATE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// text-2xl group h-12 px-6 bg-orange-500 border-2 border-orange-500 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800
