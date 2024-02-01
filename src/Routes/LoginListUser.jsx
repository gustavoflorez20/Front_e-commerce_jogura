import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const LoginListUser = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("Conectado al server:", formLogin);
    connectLogin();
  };

  const connectLogin = async () => {
    try {
      const url = "http://172.16.1.127:3001/User/login";

      const credentials = {
        email: formLogin.email,
        password: formLogin.password,
      };

      const answer = await axios.post(url, credentials);
      console.log("Conectado sin problema:", answer.data.Token);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmitLogin}>
      <div className="container mx-auto my-8 p-8 bg-gray-100">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-20">
                <div className=" grid space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <img className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full" 
                      src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706447831/LogoTequetapas_znf13d.jpg" 
                      alt="Logo Tequetapas"/>
                     <h2 className="text-center text-2xl text-cyan-900 font-bold">
                      Inicia sesión para Comenzar <br /> Lo mejor de Tequetapas
                    </h2>
                  </div>

                  {/* Input para correo electrónico */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mt-10 block text-2xl font-medium text-gray-900"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="string"
                      id="email"
                      name="email"
                      value={formLogin.email}
                      onChange={handleChangelogin}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="correo@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-2xl font-medium text-gray-900"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formLogin.password}
                      onChange={handleChangelogin}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="********"
                    />
                  </div>


                  <button>
                    <Link to="" className="text-lx font-semibold leading-6 text-2xl text-white">
                      <h2 className="h-12 px-8 bg-orange-600 border-8 border-orange-600 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800">
                        Iniciar Sesion</h2>
                    </Link>
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
    </form>
  );
};

export default LoginListUser;
