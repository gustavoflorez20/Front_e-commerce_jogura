import axios from 'axios';
import React, { createContext, useState } from 'react';

export const ProductoContext = createContext();

export const ProductoContextProvider = ({ children }) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [amount, setAmount] = useState(0);

  const seleccionarProducto = (nuevoProducto) => {
    const productoExistente = productosSeleccionados.find(
      (producto) => producto.id === nuevoProducto.id
    );

    if (productoExistente) {
      setProductosSeleccionados((prevProductos) =>
        prevProductos.map((producto) =>
          producto.id === nuevoProducto.id
            ? { ...producto, cantidad: producto.cantidad + 1 }
            : producto
        )
      );
    } else {
      setProductosSeleccionados((prevProductos) => [
        ...prevProductos,
        { ...nuevoProducto, cantidad: 1 },
      ]);
    }
    addition();
  };

  const eliminarProducto = (id) => {
    const productoExistente = productosSeleccionados.find(
      (producto) => producto.id === id
    );

    if (productoExistente) {
      if (productoExistente.cantidad > 1) {
        setProductosSeleccionados((prevProductos) =>
          prevProductos.map((producto) =>
            producto.id === id
              ? { ...producto, cantidad: producto.cantidad - 1 }
              : producto
          )
        );
      } else {
        setProductosSeleccionados((prevProductos) =>
          prevProductos.filter((producto) => producto.id !== id)
        );
      }

      subtract();
    }
  };

  const addition = () => setAmount(amount + 1);

  const subtract = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const eliminarTodo = () => {
    setProductosSeleccionados([]);
    setAmount(0);
  };

  const sendComands = () => {
    axios
      .post('http://localhost:3001/Comands/comandas', { productosSeleccionados })
      .then((response) => {
        console.log('Productos Enviados:', response.data);
      })
      .catch((err) => {
        console.log('Error al enviar productos:', err);
      });
  };

  const contextValue = {
    productosSeleccionados,
    seleccionarProducto,
    eliminarProducto,
    amount,
    addition,
    subtract,
    eliminarTodo,
    sendComands,
  };

  return (
    <ProductoContext.Provider value={contextValue}>
      {children}
    </ProductoContext.Provider>
  );
};
