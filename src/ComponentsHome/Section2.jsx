
import Tio from "../Images/Tiopapelon.png";
import Burger from "../Images/BUGUERIE.png";
import Cachapa from "../Images/LaCachapera.jpg";
import Brutal from "../Images/brutal58.es.jpg";
import Arepas from "../Images/AREPAS.png";



const Clients = () => {
  
  return (
    <div className="flex flex-col p-8 gap-12 justify-center">
      <div className="px-3 py-6 rounded-lg bg-footer shadow-md mt-12">
        
          
            <h2 className="text-4xl justify-center items-center flex font-bold">
              Nuestros Principales Clientes 
            </h2>
          
      </div>

      <div className="flex justify-center gap-16">
        <img src={Tio} alt="Papelon" className="w-40 rounded-full" />
        <img src={Burger} alt="Burguerie" className="w-40 rounded-full" />
        {/* <img src={Cachapa} alt="LaCachapera" className="w-40 rounded-full" /> */}
        <img src={Cachapa} alt="LaCachapera" className="w-40 rounded-full" />
        <img src={Brutal} alt="Brutal58" className="w-40 rounded-full" />
        <img src={Arepas} alt="Arepas" className="w-40 rounded-full" />
      </div>
    </div>
  );
};

export default Clients;
