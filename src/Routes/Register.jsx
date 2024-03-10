import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [tuToken, setTuToken] = useState("");

  const handleSendEmail = async () => {
    const headers = {
      Authorization: `Bearer ${tuToken}`
    };
    try {
      await axios.post("https://tequetapasb-es.onrender.com/User/email", { email }, { headers });
      console.log("Correo electrónico enviado exitosamente.", email);
      toast.success("Enviado", { position: "top-right" });
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error.message);
      toast.warning("Verifique los Datos", { position: "bottom-left" });
    }
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  // POST AGREGAR USUARIOS//
  // ESTA FUNCION  NO SE IRA A LA CARPETA USE CONTEXT SE QUEDA EN LOCAL STORAGE POR TEMAS DE ACTUALIZACION DE LA PAHGINA Y PODEMOS PERDER LA INFO  EN LA//
  const postUser = async () => {
    try {
      const url = "http://localhost:3001/User"; // NO TOCAR ESTA VARIABLE, ES LA CONEXION AL SERVER//

      const objectPost = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      const answer = await axios.post(url, objectPost);
      console.log("Respuesta del servidor:", answer.data);
      toast.success("Registrado", { position: "top-right" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      toast.warning("Verifique los Datos", { position: "bottom-left" });
    }
  };

  /* FUNCION PARA CALCULAR LA MAYORIA DE EDAD */
  /*   const age = async calculateAge (formData.birthdate);   CALCULO DE LA EDAD
  if (age >= 18) {
    await postUser();
  } else {
    alert('No cumples con la mayoría de edad');
  }
}; */

  return (
    <form onSubmit={handleSubmitRegister}>
      <div className="container mx-auto my-8 p-8 bg-gray-100">
        <div className="relative container m-auto px-6 text-gray-600 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-20">
                <div className=" grid space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <img
                      className="w-20 md:w-24 lg:w-32 xl:w-40 rounded-full"
                      src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706447831/LogoTequetapas_znf13d.jpg"
                      alt="Logo Tequetapas"
                    />
                    <h2 className="text-center text-2xl text-gray-900 font-bold">
                      Registro de Usuario
                    </h2>
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
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        handleChange(e);
                        setEmail(e.target.value);
                      }}
                      className="mt-2 p-2 w-full border rounded-md"
                      required
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
                      htmlFor="password"
                      className="block text-2xl font-medium text-gray-900"
                    >
                      Contraseña:
                    </label>
                    <input
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="********"
                    ></input>
                  </div>
                  <div className="text-lx font-semibold leading-6 text-2xl text-white">
                    <button
                      onClick={async () => {
                        await postUser(); 
                        await handleSendEmail(); 
                      }}
                      type="submit"
                      className="h-12 px-8 bg-orange-600 border-8 border-orange-600 rounded-full text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:border-orange-700 active:bg-orange-800"
                    >
                      Registrarse
                    </button>
                    <ToastContainer />
                  </div>

                  <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                    <p className="text-xs">
                      Al proceder, usted acepta nuestra{" "}
                      <a href="/terminos" className="underline">
                        Condiciones de uso
                      </a>{" "}
                      y confirma que has leído nuestra{" "}
                      <a href="/cookies" className="underline">
                        Declaración de privacidad y cookies
                      </a>
                      .
                    </p>
                    <p className="text-xs">
                      Este sitio está protegido por reCAPTCHA y el{" "}
                      <a href="/politicas" className="underline">
                        Política de privacidad de Google
                      </a>{" "}
                      y{" "}
                      <a href="/terminos" className="underline">
                        Términos de servicio
                      </a>{" "}
                      aplicar.
                    </p>
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