import logoFooter from "../Images/LOGO2.png";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-orange-400   p-8 xl:p-10">


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
          <div className="flex items-center gap-4">
            <div className="bg-social text-orange-500 block p-2 rounded-full">
              <a
                href="https://www.instagram.com/tequetapasfoods/?hl=es"
                target="blank"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="bg-social  text-orange-500 block p-2 rounded-full">
              <a
                href="https://www.facebook.com/Tequetapasgroup/?locale=es_ES"
                target="blank"
              >
                <FaFacebook size={24} />
              </a>
            </div>
            <div className="bg-social  text-orange-500 block p-2 rounded-full">
              <a
                href="https://www.youtube.com/watch?v=BsWvr6K5jPU"
                target="blank"
              >
                <FaYoutube size={24} />
              </a>
            </div>
            <div className="bg-social  text-orange-500 block p-2 rounded-full">
              <a href="https://www.tiktok.com/@tequetapasfoods" target="blank">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="flex justify-between gap-4 p-8 ">


        <div className="flex  items-center gap-10">


        <p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/terminos" className="text-white-800 dark:text-white">
    Terminos y condiciones
  </Link>{" "}
</p>

          <p className="font-semibold font-Anton  text-white-800 dark:text-white ">
            Politica de privacidad{" "}
          </p>

          <p className="font-semibold font-Anton   rounded-3xl  text-white-800 dark:text-white ">
            Politica de Cookies{" "}
          </p>

          <p className="font-semibold font-Anton   rounded-3xl  text-white-800 dark:text-white ">
            Aviso Legal{" "}
          </p>

           {/*      <p className="font-semibold font-Anton  rounded-3xl  text-white-800 dark:text-white ">
            Información al Consumidor{" "}
          </p> */}

          <p className="font-semibold font-Anton rounded-3xl   text-white-800 dark:text-white ">
            FAQs{" "}
          </p>

          <p className="font-semibold font-Anton  rounded-3xl text-white-800 dark:text-white  ">
            Atención al Cliente{" "}
          </p>

          <p className="font-semibold font-Anton rounded-sm  text-white-800 dark:text-white  hover:bg-primary">
            Trabaja con nosotros{" "}
          </p>

          <p className="font-semibold font-Anton rounded-sm text-white-800 dark:text-white  hover:bg-primary">
          Entrega y recogida{" "}
          </p>
      
          <p className="font-semibold font-Anton rounded-sm   text-white-800 dark:text-white  hover:bg-primary">
    Contactanos{" "}
          </p>

          
        </div>
        

        <br />
        
      </section>



      <div>
        <p className="flex items-center justify-center font-semibold">
          &copy; 2024 JOGURA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
