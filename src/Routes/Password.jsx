import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';




const Password = () => {
  const [email, setEmail] = useState('');

  const handleSendEmail = async () => {
    try {
    
      await axios.post('https://tequetapasb-es.onrender.com/User/restablecer', { email });
      console.log('Correo electrónico enviado exitosamente.',email);
      toast.success("Enviado", { position: "top-right" });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error.message);
      toast.warning("Verifique los Datos", { position: "bottom-left" });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-xl font-semibold mb-4">Ingrese su Correo</h1>
          <p className="text-gray-600 mb-6">Le enviaremos un enlace para restablecer su Contraseña.</p>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="direccion@email.com" 
              className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-400 focus:outline-none" 
          onClick={handleSendEmail}>
            Enviar
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Password;
