import React, { createContext, useState } from 'react';

export const ProductoContext = createContext();

export const ProductoContextProvider = ({ children }) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

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
  };

  return (
    <ProductoContext.Provider value={{ productosSeleccionados, seleccionarProducto }}>
      {children}
    </ProductoContext.Provider>
  );
};



export const AmountContext = createContext();

export const AmountContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  const addition = () => setAmount(amount + 1);
  const subtract = () => {
  
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const contextValue = {
    amount,
    addition,
    subtract,
  };

  return <AmountContext.Provider 
  value={contextValue}>{children}
  </AmountContext.Provider>;
};

    
  
        