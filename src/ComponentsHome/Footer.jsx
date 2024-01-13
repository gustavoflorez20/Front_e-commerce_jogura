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
          
            <div className="flex gap-4 hover:cursor-pointer">
  <a href="https://www.facebook.com/Tequetapasgroup" target="_blank" rel="noopener noreferrer">
    <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="40" height="40" alt="fb" />
  </a>
  <a href="https://twitter.com/search?q=Tequetapas&src=typed_query" target="_blank" rel="noopener noreferrer">
    <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="40" height="40" alt="tw" />
  </a>
  <a href="https://www.instagram.com/tequetapasfoods/?hl=es" target="_blank" rel="noopener noreferrer">
    <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="40" height="40" alt="inst" />
  </a>
  
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
