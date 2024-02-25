import React, { useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ProductoContext } from "./Cant";

const DisplayProducto = ({ handleEliminarTodo }) => {
  const { productosSeleccionados, eliminarProducto } = useContext(ProductoContext);

  const handleEliminarProducto = (id) => {
    eliminarProducto(id);
  };

  const productosAgrupados = productosSeleccionados.reduce((agrupados, producto) => {
    if (!agrupados[producto.id]) {
      agrupados[producto.id] = { ...producto, cantidadTotal: 0 };
    }
    agrupados[producto.id].cantidadTotal += producto.cantidad;
    return agrupados;
  }, {});

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

  return Object.values(productosAgrupados).length > 0 ? (
    <>
      {Object.values(productosAgrupados).map((producto) => (
        <div key={producto.id}>
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
  const { productosSeleccionados, eliminarTodo } = useContext(ProductoContext);
  const navigate = useNavigate();

  const handleEliminarTodo = () => {
    eliminarTodo([]);
  };

  const handleFinalizarCompra = () => {
    if (productosSeleccionados.length > 0) {
      sendComands();
      console.log('Productos Enviados:', productosSeleccionados);
      handleEliminarTodo();
    } else {
     
      toast.warning("No puedes finalizar la compra sin productos en el carrito", { position: "top-right" });
    }
  };

  const sendComands = () => {
    console.log('Contenido de productos Seleccionados send:', productosSeleccionados);

    axios
      .post('http://localhost:3001/Products', { car: productosSeleccionados })
      .then((response) => {
        console.log('Productos Enviados desde el Carrito:', productosSeleccionados);
        toast.success("Pedido Enviado", { position: "top-right" });
        setTimeout(() => {
          handleEliminarTodo();
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log('Error al enviar productos:', err);
      });
  };

  return (
    <div className="mx-auto my-16 p-8 bg-gray-100">
      <h1 className="text-4xl">Carrito de Compras</h1>
      
      <div className="bg-white p-8 rounded-xxl shadow-md border border-black">
        <h1 className="text-3xl font-semibold mb-4"></h1>
        <DisplayProducto handleEliminarTodo={handleEliminarTodo} />
        <button
          className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
          onClick={handleFinalizarCompra}
        >
          Finalizar Compra
        </button>
        <ToastContainer />
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
