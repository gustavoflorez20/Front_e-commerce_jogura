import React from 'react';
import { Link } from 'react-router-dom';

const LogingUser = () => {
  return (
    <div>
      <div className="container mx-auto my-8 p-8 bg-gray-100">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="flex flex-col items-center space-y-4">
                  <img src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706447831/LogoTequetapas_znf13d.jpg" loading="lazy" className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full" alt="Tequetapas"/> {/* Modificado para centrar y ajustar el tamaño */}
                  <h2 className="text-center text-2xl text-cyan-900 font-bold">Inicia sesión para Comenzar <br /> Lo mejor de Tequetapas</h2> 
                </div>
                <div className="mt-16 grid space-y-4">
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue con Google</span>
                    </div>
                  </button>
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" className="absolute left-0 w-10" alt="Instagram logo" />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue con Instagram</span>
                    </div>
                  </button>
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue Con Facebook</span>
                    </div>
                  </button>
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <Link to="/registersUser" className="text-lx font-semibold leading-6 text-2xl text-white">
                      <h2 className="text-center text-1xl text-cyan-900 font-bold">Registrarse</h2>
                    </Link>
                  </button>
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <Link to="/login" className="text-lx font-semibold leading-6 text-2xl text-white">
                      <h2 className="text-center text-1xl text-cyan-900 font-bold">Iniciar Sesion</h2>
                    </Link>
                  </button>


                </div>
                <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">Al proceder, usted acepta nuestra <a href="#" className="underline">Condiciones de uso</a> y confirma que has leído nuestra <a href="#" className="underline">Declaración de privacidad y cookies</a>.</p>
                  <p className="text-xs">Este sitio está protegido por reCAPTCHA y el <a href="#" className="underline">Política de privacidad de Google</a> y <a href="#" className="underline">Términos de servicio</a> aplicar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogingUser;

