import React, { useState } from 'react';
import axios from 'axios';
import '../ComponentsInventory/Inventory.css'

function Create() {
    const [products, setProducts] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
  

  const handleAdd = () => {
    axios
      .post('http://localhost:3001/Products',
       { products: products 
      ,cantidad : cantidad 
      , precio:precio })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && products && cantidad && precio) {
      handleAdd();
    }
  };
  

  return (
    <div className='create_form'>
        <br />
      <input
        type='text'
        placeholder='Producto'
        onChange={(e) => setProducts(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
      
        <br />
      <input
        type='text'
        placeholder='Cantidad'
        onChange={(e) => setCantidad(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
          <br />
      <input
        type='text'
        placeholder='Precio'
        onChange={(e) => setPrecio(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
       <br />
       <br />
      <button type='button' onClick={handleAdd}>
        Agregar
      </button>
    </div>
  );
}

export default Create;