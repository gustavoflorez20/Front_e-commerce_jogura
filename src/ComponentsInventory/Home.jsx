import React, { useEffect, useState } from 'react';
import { BsFillTrashFill  } from 'react-icons/bs';
import Create from './Create';
import axios from 'axios';
import '../ComponentsInventory/Inventory.css'
import { Link } from 'react-router-dom'

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('http://localhost:3001/Products')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  };

  const handleEditm = (id) => {
    axios.patch(`http://localhost:3001/Products/${id}`)
      .then(result => {
        console.log(result);
        fetchTodos(); 
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/Products/${id}`)
      .then(result => {
        console.log(result);
        fetchTodos(); 
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='lista'>
      <h2>Lista de Productos</h2> 
      <Create />
      <br/>
      {todos.length === 0 ? (
        <div>
          
        </div>
      ) : (
        todos.map(todo => (
            <div className='Products' key={todo._id}>
 <div className='checkbox'>
  <p>
    Producto: {todo.producto},<br />
    Cantidad: {todo.cantidad},<br />
    Precio: {todo.precio}
  </p>
</div>
  <div>
    <span>
        <br />
      <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} />
    </span>
  </div>
</div>
          ))
        )}
       <h2> 2024 JOGURA. Todos los derechos reservados.</h2>
       <Link to="/">Salir</Link>
    </div>
  );
}

export default Home;