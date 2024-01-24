import React, { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';
import '../ComponentsInventory/Inventory.css';










function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get('http://localhost:3001/Products')
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/Products/${id}`)
      .then((result) => {
        console.log(result);
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  return (
    
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
          
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    
 

      <br />
      {todos.length === 0 ? (
        <div></div>
      ) : (
        todos.map((todo) => (
          <div className='Products' key={todo._id}>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="p-1 bg-orange-200"></div>
            <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 text-center">
  {todo.producto}<br />
  
  {todo.precio}<br />
</h2>
{todo.imagen && (
  <div className="flex justify-center">
    <img src={todo.imagen} alt={`Imagen de ${todo.producto}`} className="max-w-full mb-3" style={{ maxWidth: '40%' }} />
  </div>
)}
             
              <p className="text-4xl font-bold text-gray-800 mb-6"></p>
              <ul className="text-sm text-gray-600 mb-6"></ul>
            </div>
            <div className="p-4">
              <button className="w-full bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple active:bg-orange-800">
                Pruebalo!
              </button>
            </div>

            <span className="flex justify-center items-center">
              <br />
              <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}justify-center />
            </span>
          </div>
          
        
          </div>
        ))
      )}
      
    </div>
    
  );
  
}

export default Home;
