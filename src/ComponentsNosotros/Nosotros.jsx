import ReactPlayer from "react-player";
import Jefe from "../Images/JEFEDEOPERACIONES.jpg";
import Jefa from "../Images/Mujer.jpeg";

const Nosotros = () => {
  return (
    <section className="w-90vh">
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="md:w-2/5 order-2 md:order-1 flex justify-center ml-8 text-justify md:justify-start rounded-md">
          <ReactPlayer
            url="https://youtu.be/BsWvr6K5jPU?si=GHuZtjO_5jiNXm-o"
            width="620px"
            height="460px"
          />
        </div>

        <div className="w-full md:w-3/5 md:ml-8 order-1 md:order-2">
          <div className="px-3 py-6 rounded-lg border-spacing-1 border-primary ">
            <h2 className="text-4xl font-bold">¿Quiénes Somos?</h2>
          </div>

          <p className="mt-4">
            Tequetapas Foods es una empresa dedicada a la fabricación y
            distribución de tequeños congelados. Ofrecemos una amplia variedad
            de deliciosos tequeños de la mejor calidad a precios sin
            competencia. Ponemos a tu disposición tequeños tradicionales (de
            masa de trigo y rellenos con queso fresco), así como tequeños de
            masa de plátano macho rellenos de queso fresco, tequeños de masa de
            maíz rellenos de queso fresco y tequeños rellenos de nutella.
          </p>
          <p className="mt-4">
            También, somos proveedores de empanadas artesanales rellenas de
            carne, pollo y queso. Nuestra misión es llegar al paladar de toda
            Europa a través de nuestros sabores tradicionales pero además,
            combinados con recetas locales. Todos nuestros productos son
            elaborados con los mejores ingredientes y de alta calidad.
          </p>
          <p className="mt-4">
            En <span>Tequetapas</span> Foods nos preocupamos por ofrecer un
            producto único pero también nuestras novedades gastronómicas.
          </p>
        </div>
      </div>


{/* NUESTRA RAZON DE SER */}
<div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
  <img
    className="ml-16 w-96 h-auto"
    src="https://scontent.fmad19-1.fna.fbcdn.net/v/t39.30808-6/313320284_633721148189213_8351421474518426025_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=amoiKoXA2wYAX-8LnPW&_nc_ht=scontent.fmad19-1.fna&oh=00_AfBryHzaUNIVEamy0Twgrf1RMhv18SZIa8yxI4SYlKPz-A&oe=65A77D39"
    alt="Operaciones"
  />
  <div className="ml-8">
    <h2 className=" flex text-4xl font-bold justify-end items-end mr-8">
      Nuestra razón de ser
    </h2>
    <p className=" flex text-justify items-center mt-4">
      También somos proveedores de empanadas artesanales rellenas de carne,
      pollo y queso. Nuestra misión es llegar al paladar de toda Europa a
      través de nuestros sabores tradicionales pero además, combinados con
      recetas locales. Todos nuestros productos son elaborados con los
      mejores ingredientes y de alta calidad.
    </p>
  </div>
</div>


      <div className="px-3 py-6 rounded-lg bg-primary shadow-md mt-12">
        <h2 className="text-4xl justify-center items-center flex font-bold">
          Comité de Directivos
        </h2>
      </div>

      <div className="flex mt-2 p-4 gap-20 justify-center ">
        <div className="flex flex-col items-center">
          <img
            src={Jefe}
            alt="CEO"
            className="w-40 h-40 rounded-full border-color: rgb(220 38 38)"
          />
          <h2>Horacio Hernandez</h2>
          <h3>CEO</h3>
        </div>
        

        {/* <div className="flex flex-col items-center">
          <img
            src={Logistico}
            alt="CEO"
            className="w-40 h-40 rounded-full border-color: rgb(220 38 38)"
          />
          <h2>Joel Lozada</h2>
          <h3>Logistica</h3>
        </div> */}

        <div className="flex flex-col items-center">
          <img
            src={Jefa}
            alt="CEO"
            className="w-40 h-40 rounded-full border-color: rgb(220 38 38)"
          />
          <h2>Lilimar Salazar</h2>
          <h3>CEO</h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Jefe}
            alt="CEO"
            className="w-40 h-40 rounded-full border-color: rgb(220 38 38)"
          />
          <h2>Nelson Hernandez</h2>
          <h3>CEO</h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Jefe}
            alt="CEO"
            className="w-40 h-40 rounded-full border-color: rgb(220 38 38)"
          />
          <h2>Javier Dominguez</h2>
          <h3>CEO</h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Jefe}
            alt="CEO"
            className="w-40 h-40 rounded-full border-color: rgb(220 38 38)"
          />
          <h2>Marco de Sousa</h2>
          <h3>CEO</h3>
        </div>
      </div>

    </section>
  );
};

export default Nosotros;
