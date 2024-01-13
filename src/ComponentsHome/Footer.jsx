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
    Terminos y Condiciones
  </Link>{" "}
</p>

<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/politicas" className="text-white-800 dark:text-white">
    Politicas de Privacidad
  </Link>{" "}
</p>

<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/cookies" className="text-white-800 dark:text-white">
    Cookies
  </Link>{" "}
</p>

<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/legal" className="text-white-800 dark:text-white">
    Aviso Legal
  </Link>{" "}
</p>

<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/FAQs" className="text-white-800 dark:text-white">
    FAQs
  </Link>{" "}
</p>

<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/atencionAlCliente" className="text-white-800 dark:text-white">
    Atencion de Cliente
  </Link>{" "}
</p>

<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/trabajaConNosotros" className="text-white-800 dark:text-white">
    Trabaja con Nosotros
  </Link>{" "}
</p>

<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <Link to="/entregaYRecogidas" className="text-white-800 dark:text-white">
    Entrega y Recogidas
  </Link>{" "}
</p>
      
<p className="font-semibold font-Anton text-white-800 dark:text-white">
  <a href="https://api.whatsapp.com/send?phone=34657511851&text=Hola%20%F0%9F%91%8B%20quiero%20hacer%20un%20pedido%20" className="text-white-800 dark:text-white">
    Contactanos
  </a>{" "}
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
