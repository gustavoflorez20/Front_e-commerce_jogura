import logoFooter from "../Images/LOGO2.png";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-orange-500   p-8 xl:p-5">
      <div>
        <div className="flex items-center justify-between gap-4 border-b p-8 border-primary">
          <img
            className="w-20  bg-white rounded-full"
            src={logoFooter}
            alt="LogoFooter"
          />
          <div className="text-black">
            <h1 className="text-lg font-bold mb-2">
              ¡Sabores con origen! <br />
              🏭𝗧𝗲𝗾𝘂𝗲𝗧𝗮𝗽𝗮𝘀 - Fábrica de tequeños y productos venezolanos.
            </h1>
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <a
              href="https://www.facebook.com/Tequetapasgroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="40"
                height="40"
                alt="fb"
              />
            </a>
            <a
              href="https://twitter.com/search?q=Tequetapas&src=typed_query"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="40"
                height="40"
                alt="tw"
              />
            </a>
            <a
              href="https://www.instagram.com/tequetapasfoods/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="40"
                height="40"
                alt="inst"
              />
            </a>
          </div>
        </div>
      </div>

      <section className="flex justify-between  gap-4 p-8 ">
        <div className="flex  items-center gap-20">
          <p className="font-semibold font-Anton text-white-800 dark:text-white">
            <Link to="/terminos" className="text-white-800 dark: text-white">
              Terminos y Condiciones
            </Link>{" "}
          </p>

          <p className="font-semibold font-Anton text-white-800 dark:text-white">
            <Link to="/politicas" className="text-white-800 dark: text-white">
              Politicas de Privacidad
            </Link>{" "}
          </p>

          <p className="font-semibold font-Anton text-white-800 dark:text-white">
            <Link to="/cookies" className="text-white-800 dark: text-white">
              Politica de Cookies
            </Link>{" "}
          </p>

          <p className="font-semibold font-Anton text-white-800 dark:text-white">
            <Link
              to="/trabajaConNosotros"
              className="text-white-800 dark: text-white"
            >
              Trabaja con Nosotros
            </Link>{" "}
          </p>

         <p className="font-semibold font-Anton text-white-800 dark:text-white">
          <Link
            to="/ubicacion"
            className=" text-white-800 dark: text-white"
          >
            Donde Estamos Ubicados
          </Link>{" "}
          </p>
          
          <p className="font-semibold font-Anton text-white-800 dark:text-white">
            <Link
              to="/atencionAlCliente"
              className="text-white-800 dark: text-white"
            >
              Atencion al Cliente
            </Link>{" "}
          </p>
        </div>

        <br />
      </section>

      <div>
        <p className="text-white flex items-center justify-center font-semibold">
          &copy; 2024 JOGURA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
