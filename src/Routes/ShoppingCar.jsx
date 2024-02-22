import React from "react";
import { useContext } from "react";
import { ProductoContext } from "./Cant";

const DisplayProducto = () => {
  const { productosSeleccionados, eliminarProducto, eliminarTodo } = useContext(
    ProductoContext
  );

  

  const handleEliminarTodo = () => {
    eliminarTodo([]);
  
  };

  const handleEliminarProducto = (id) => {
    eliminarProducto(id);
  };

  const productosAgrupados = productosSeleccionados.reduce(
    (agrupados, producto) => {
      if (!agrupados[producto.id]) {
        agrupados[producto.id] = { ...producto, cantidadTotal: 0 };
      }
      agrupados[producto.id].cantidadTotal += producto.cantidad;
      return agrupados;
    },

    {}
  );

  const calcularTotaliva = () => {
    const totalGeneral = calcularTotalGeneral();
    const iva = totalGeneral > 0 ? totalGeneral * 0.21 : 0;
    return iva.toFixed(2);
  };

  const calcularTotalGeneral = () => {
    let totalGeneral = 0;

    Object.values(productosAgrupados).forEach((producto) => {
      const precio = parseFloat(producto.price) || 0;
      const cantidad = parseInt(producto.cantidadTotal) || 0;

      if (!isNaN(precio) && !isNaN(cantidad)) {
        totalGeneral += precio * cantidad;
      }
    });

    return totalGeneral.toFixed(2);
  };

  const cantidadTotalProductos = Object.values(productosAgrupados).reduce(
    (total, producto) => {
      return total + producto.cantidadTotal;
    },
    0
  );

  return Object.values(productosAgrupados).length > 0 ? (
    <>
      {Object.values(productosAgrupados).map((producto) => (
        <div key={producto.id}>
           <h1>Cantidad Total de Productos: {cantidadTotalProductos}</h1>
           <br />
          <p>
            *&nbsp;{producto.name} Cantidad: {producto.cantidadTotal} Precio:{" "}
            {producto.price}€
            
          </p>
          <br />
          <img
            src={producto.image}
            alt={producto.name}
            style={{ maxWidth: "9rem", maxHeight: "9rem" }}
          />
          <button
            className="ml-4 text-red-500"
            onClick={() => handleEliminarProducto(producto.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <br />
      <p>-Impuestos : {calcularTotaliva()}€</p>

      <p>-Total General: {calcularTotalGeneral()}€</p>
     
      <br />

      <button
          className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
          onClick={() => handleEliminarTodo()}
        >
          Vaciar Carrito
        </button>
    </>
  ) : null;
};

const ShoppingCar = () => {
  


  return (
    <div className="mx-auto my-16 p-8 bg-gray-100">
      <div className="bg-white p-8 rounded-xxl shadow-md border border-black">
        <h1 className="text-3xl font-semibold mb-4"></h1>
        <DisplayProducto />

     

        <button
          className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
          onClick={() => console.log("Finalizar Compra")}
        >
          Finalizar Compra
        </button>
        <div>
          <p className="mt-4">
            Explora nuestra tienda y encuentra productos increíbles para agregar
            a tu carrito.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
