import React from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import './Conten.css';

const Conten = () => {
  return (
    
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 Conten-container">
      <div className="Conten-video">
        <FacebookProvider appId="tu-id-de-app-de-facebook">
          <EmbeddedPost href="https://www.facebook.com/Tequetapasgroup/videos/3025234517723013/" width="500" showText="false" />
        </FacebookProvider>
      </div>
      <p className="Conten-text">
        La felicidad en pequeñas dimensiones! 🤤

        Tequeños de plátano y queso fresco, disponibles para preparar en casa en blister de 8 unidades y bolsas de 85 unidades.

        📲 Mañana estamos activos para recibir todos sus pedidos.
        No nos hacemos responsables si tienes la necesidad de pedirte TODO 😏
      </p>
    </div>
  );
};

export default Conten;


