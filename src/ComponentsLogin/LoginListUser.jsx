
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Images/LOGO2.PNG';

const LoginListUser = () => {

  const [loginUsers, setLoginUsers] = useState({
    username: '',
    password: '',
  });

  const handleChangeUsers = (event) => {
    const { name, value } = event.target;
    setLoginUsers((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleSubmitUsers = (event) => {
    event.preventDefault();
    postUserLogin();
  };

  const postUserLogin = async () => {
    try {
      const url = "http://172.16.1.127:3001/User";
      const objectPosLogin = {
        username: loginUsers.username, 
        password: loginUsers.password,
      };

      const usersSuccessfully = await axios.post(url, objectPosLogin);
      console.log("Conectado con éxito:", usersSuccessfully.data);
    } catch (error) {
      console.error("Error al conectarse:", error);
    }
  };



  return (
    <div>
      
    <form onSubmit={handleSubmitUsers}>

      <div className="relative py-10 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-6 xl:px-20">
          <div className="m-auto md:w-8/1 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-20">
                <div className=" grid space-y-4">
                <div className="flex flex-col items-center space-y-4">
                <img className="rounded-full" src={Logo}/>
                  <h2 className="text-center text-2xl text-cyan-900 font-bold">Inicia sesión para Comenzar <br /> Lo mejor de Tequetapas</h2> 
                </div>

                  {/* Input para correo electrónico */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                      Correo Electrónico
                    </label>
                    <input
                      type="string"
                      id="username"
                      name="username"
                      value={loginUsers.username}
                      onChange={handleChangeUsers}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="correo@example.com"
                     
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="block text-1x2 font-medium text-gray-700">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={loginUsers.password}
                      onChange={handleChangeUsers}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="********"
                    
                    />
                  </div>

                  {/* Botón de inicio de sesión */}
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <Link to="/clientRegisterUser" className="text-lx font-semibold leading-6 text-2xl text-white">
                      <h2 className="text-center text-1xl text-cyan-900 font-bold">Iniciar Sesión</h2>
                    </Link>
                  </button>
                </div>

                <div className="mt-10 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">Al proceder, usted acepta nuestra <a href="#" className="underline">Condiciones de uso</a> y confirma que has leído nuestra <a href="#" className="underline">Declaración de privacidad y cookies</a>.</p>
                  <p className="text-xs">Este sitio está protegido por reCAPTCHA y el <a href="#" className="underline">Política de privacidad de Google</a> y <a href="#" className="underline">Términos de servicio</a> aplicar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
};


export default LoginListUser;