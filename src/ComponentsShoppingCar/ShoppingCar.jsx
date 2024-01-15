import { FiShoppingCart } from "react-icons/fi";

const ShoppingCar = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4">
          <FiShoppingCart className="inline-block mr-2" />
          Tu carrito está vacío
        </h1>
        <p className="text-gray-600 mb-8">Empieza a comprar para añadir productos a tu carrito.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Empieza a comprar
        </button>
      </div>
    </section>
  );
};

export default ShoppingCar;
