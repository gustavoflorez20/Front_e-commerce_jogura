import React, { useContext, useState } from "react";
import { AmountContext } from "../ComponentsContex/Cant";

const Displayamount = () => {
  const { amount } = useContext(AmountContext);
  return <p>{amount}</p>;
};

const Frozen = () => {
  const { addition, subtract } = useContext(AmountContext);
  const [valor, setValor] = useState(0);

  const handleAddition = () => {
    addition();
    setValor((prevValor) => prevValor + 1);
  };

  const handleSubtract = () => {
    if (valor > 0) {
      subtract();
      setValor((prevValor) => {
        console.log("valor después de sustracción:", prevValor - 1);
        return prevValor - 1;
      });
    }
  };

  const handlePruebaloClick = () => {
    addition();
    setValor((prevValor) => prevValor + 1);
  };

  console.log("valor actual:", valor);

  return (
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Pricing Card 1 --> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-orange-200"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Tequeño Tradicional
            </h2>

            <img
              className="mb-6 w-full h-auto"
              src="https://scontent.fmad22-1.fna.fbcdn.net/v/t39.30808-6/223643901_1745312475656914_7048288701235607891_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=YsapUlPZ18IAX-lVGSG&_nc_ht=scontent.fmad22-1.fna&oh=00_AfABhZsgeY_khjUXWEB4mE6L0c89ueqNwZdKB2bG69sBJQ&oe=65A89204"
              alt="Tequeño Tradicional"
            />
            <p className="text-4xl font-bold text-gray-800 mb-6"></p>
            <ul className="text-sm text-gray-600 mb-6"></ul>
          </div>
          <div className="p-4">
            <button
              className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
              onClick={handlePruebaloClick}
            >
              Pruebalo
            </button>
            <div className="flex justify-between mt-4">
              <button
                className="w-1/3 bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
                onClick={handleAddition}
              >
                +
              </button>
              <Displayamount />
              <button
                className="w-1/3 bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
                onClick={handleSubtract}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frozen;