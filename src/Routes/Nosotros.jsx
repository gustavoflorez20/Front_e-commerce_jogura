import React from "react";
import ReactPlayer from "react-player";
import { useSpring, animated } from "react-spring";

const Nosotros = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slide = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(-50%)" },
  });

  const videoUrl = "https://youtu.be/BsWvr6K5jPU?si=GHuZtjO_5jiNXm-o";

  const quienesSomosText = [
    "Tequetapas Foods es una empresa dedicada a la fabricación y distribución de tequeños congelados. Ofrecemos una amplia variedad de deliciosos tequeños de la mejor calidad a precios sin competencia. Ponemos a tu disposición tequeños tradicionales (de masa de trigo y rellenos con queso fresco), así como tequeños de masa de plátano macho rellenos de queso fresco, tequeños de masa de maíz rellenos de queso fresco y tequeños rellenos de nutella.",
    "También, somos proveedores de empanadas artesanales rellenas de carne, pollo y queso. Nuestra misión es llegar al paladar de toda Europa a través de nuestros sabores tradicionales pero además, combinados con recetas locales. Todos nuestros productos son elaborados con los mejores ingredientes y de alta calidad.",
    "En Tequetapas Foods nos preocupamos por ofrecer un producto único pero también nuestras novedades gastronómicas.",
  ];

  return (
    <section className="text-xl container mx-auto my-8 p-8 bg-gray-100">
      {/* Sección de Video */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:w-1/4 order-2 md:order-1 justify-center mr-auto text-justify md:justify-start" style={slide}>
          <ReactPlayer
            url={videoUrl}
            width="400%"
            height="100%"
          />
        </div>

        {/* Párrafo */}
        <animated.div className="md:w-3/5 md:ml-8" style={fade}>
          <div className="px-3 py-6 rounded-lg border-spacing-1 border-primary ">
            <h2 className="text-4xl font-bold">¿Quiénes Somos?</h2>
          </div>

          {quienesSomosText.map((paragraph, index) => (
            <p key={index} className="mt-4">{paragraph}</p>
          ))}
        </animated.div>
      </div>

      {/* Nuestra Razón de Ser */}
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        {/* ... Código existente ... */}
      </div>

      {/* Comité de Directivos */}
      <div className="px-3 py-6 rounded-lg bg-primary shadow-md mt-12">
        <animated.h2 className="text-4xl justify-center items-center flex font-bold" style={fade}>
          Comité de Directivos
        </animated.h2>
      </div>

      <div className="flex mt-2 p-4 gap-20 justify-center text-center text-1xl ">
        <div>
        <img src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706818334/CEO_csm5gh.jpg" alt="Gerente" />
        <p>Jefe de Operaciones</p>
        </div>
        <div>
        <img src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706818336/Mujer_fxin0a.jpg" alt="Gerente" />
        <p>Jefe Administrativo y RRHH</p>
        </div>
        <div>
        <img src="https://res.cloudinary.com/djkxqbsns/image/upload/v1706818334/CEO_csm5gh.jpg" alt="Gerente" />
        <p>Jefe de Produccion</p>
        </div>
        

      </div>
    </section>
  );
};

export default Nosotros;

