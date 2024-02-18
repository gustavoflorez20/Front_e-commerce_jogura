import React from 'react';
import { useContext } from 'react';
import { AmountContext, ProductoContext } from './Cant';

const Displayamount = () => {
  const { amount } = useContext(AmountContext);
  return (
    <div>
      {amount > 0 ? (
        <p className="text-text-3xl font-semibold mb-4">Completa tu Pedido &nbsp;
        { amount } <br />
        </p>
      ) : (
        <p className="text-text-3xl font-semibold mb-4">Tu carrito está vacío.</p>
      )}
    </div>
  );
};





const DisplayProducto = () => {
  const { productosSeleccionados } = useContext(ProductoContext);


  const productosAgrupados = productosSeleccionados.reduce((agrupados, producto) => {
    if (!agrupados[producto.id]) {
      agrupados[producto.id] = { ...producto, cantidadTotal: 0 };
    }
    agrupados[producto.id].cantidadTotal += producto.cantidad;
    return agrupados;
  }, 
  
  {});


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
          <p>*&nbsp;{producto.name} Cantidad: {producto.cantidadTotal} Precio: {producto.price}€</p>
        </div>
      ))}
      <br />
      <p>-Impuestos : {calcularTotaliva()}€</p>
      
      <p>-Total General: {calcularTotalGeneral()}€</p>
      <br />
    </>
  ) : null;
};




const ShoppingCar = () => {
  const { seleccionarProducto } = useContext(ProductoContext);
  return (
<div className="container mx-auto my-16 p-8 bg-gray-100">
        <div className="flex items-center justify-center h-screen ">
        <div className="bg-white p-8 rounded-md shadow-md border border-black">
          <h1 className="text-3xl font-semibold mb-4">{<Displayamount />}</h1>
          <DisplayProducto/>
          <button
            className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800"
            onClick={() => console.log('Finalizar Compra')}
          >
            Finalizar Compra
          </button>
          <div>
            <p className="mt-4">
              Explora nuestra tienda y encuentra productos increíbles para agregar a tu carrito.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
