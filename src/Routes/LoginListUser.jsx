import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginListUser = () => {
  const navigate = useNavigate(); 
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

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log("Conectado al servidor:", formLogin);
    await connectLogin();
  };

  const connectLogin = async () => {
    try {
      const url = "https://tequetapasb-es.onrender.com/User/login";
  
      const credentials = {
        email: formLogin.email,
        password: formLogin.password,
      };
  
      const answer = await axios.post(url, credentials);
      console.log("Conectado sin problema:", answer.data.token);
      localStorage.setItem('userToken', answer.data.token);
      
      toast.success("Logueado", { position: "top-right" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      toast.error("Contraseña Incorrecta", { position: "bottom-left" });
    }
  };

  return (
    <form onSubmit={handleSubmitLogin}>
      <div className="container mx-auto my-8 p-8 bg-gray-100">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-20">
                <div className="grid space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <img
                      className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full"
                      src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706447831/LogoTequetapas_znf13d.jpg"
                      alt="Logo Tequetapas"
                    />
                    <h2 className="text-center text-2xl text-cyan-900 font-bold">
                      Inicia sesión para Comenzar <br /> Lo mejor de Tequetapas
                    </h2>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mt-10 block text-2xl font-medium text-gray-900"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="text"
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

                  <button
                    type="submit"
                    className="text-lx font-semibold leading-6 text-2xl text-white"
                  >
                    <h2 className="h-12 px-8 bg-orange-600 border-8 border-orange-600 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800">
                      Iniciar Sesión
                    </h2>
                  </button>
                  <ToastContainer />
                  

                </div>
              
                
                   
                < div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                <Link to={"/restablecer"} className="underline">
                      Restablecer Contraseña
                    </Link>{" "}
                  <p className="text-xs">
                    Al proceder, usted acepta nuestra{" "}
                    <Link to={"/terminos"} className="underline">
                      Condiciones de uso
                    </Link>{" "}
                    y confirma que has leído nuestra{" "}
                    <Link to={"/cookies"} className="underline">
                      Declaración de privacidad y cookies
                    </Link>
                    .
                  </p>
                  <p className="text-xs">
                    Este sitio está protegido por reCAPTCHA y el{" "}
                    <Link to={"/politicas"} className="underline">
                      Política de privacidad de Google
                    </Link>{" "}
                    y{" "}
                    <Link to={"/terminos"} className="underline">
                      Condiciones de uso
                    </Link>{" "}
                    aplicar.
                  </p>
                  
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
