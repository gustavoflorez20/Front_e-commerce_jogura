import React from 'react';
import './Resetario.css'

const Recetas = () => {
  return (
    <div className='Recetario'>
      
       <div className='tequenos'>
      <h2>
        Los tequeños de queso son una deliciosa especialidad venezolana que consiste en palitos de queso envueltos en masa y luego fritos. Aquí tienes una receta básica para preparar tequeños de queso:
      </h2>
      <p>
        <strong>Instrucciones:</strong>
      </p>
      <ol>
        
        <li>Calienta el aceite en una sartén a fuego medio.</li>
        <li>Fríe los tequeños hasta que estén dorados y crujientes por todos lados. Gira los tequeños para que se cocinen de manera uniforme.</li>
        <li>Retira los tequeños del aceite y colócalos sobre papel absorbente para eliminar el exceso de grasa.</li>
        <li>Sirve los tequeños calientes y disfruta. Puedes acompañarlos con salsas como guasacaca, salsa de ajo o cualquier otra de tu elección.</li>
      </ol>
      <img className='tequenos-img' src='https://scontent.fmad22-1.fna.fbcdn.net/v/t39.30808-6/315223726_645727266988601_5729648509117016032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=7eungpEm-pIAX-_k0ep&_nc_ht=scontent.fmad22-1.fna&oh=00_AfCwa92RUwdwhMzcWsUh4cR6bwNlmrDBSQUB3wb55jLPrA&oe=65931AA1' alt='Tequeños de Queso' />
      <p>¡Listo! Ahora puedes disfrutar de unos deliciosos tequeños de queso. Esta es una receta básica, pero puedes experimentar con diferentes tipos de quesos o añadir otros ingredientes a la masa según tus preferencias. ¡Buen provecho!</p>

      </div>
      <div className='cachapas'>
      <h2>
      Las Cachapas se trata de una especie de panqueque o crepe grueso elaborado a base de maíz tierno. Este delicioso manjar es típicamente servido con queso blanco:
      </h2>
      <p>
        <strong>Instrucciones:</strong>
      </p>
      <ol>
        
        <li>Calienta una sartén o budare a fuego medio-alto. Puedes untar un poco de mantequilla para evitar que las cachapas se peguen.</li>
        <li>Voltea la cachapa y cocina el otro lado hasta que esté dorado.</li>
        <li>Sirve las cachapas calientes y acompáñalas con queso de mano.</li>
        <li>Las cachapas suelen servirse con queso blanco o queso guayanés.</li>
        <li>También puedes acompañarlas con mantequilla, jamón, o incluso agregar un toque de crema.</li>
      </ol>
      <img className='cachapas-img' src='https://scontent.fmad22-1.fna.fbcdn.net/v/t1.6435-9/132102301_1584148055106691_3373294222913613213_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=810d5f&_nc_ohc=cBYecNUOIicAX8Q32TJ&_nc_ht=scontent.fmad22-1.fna&oh=00_AfDcYwT0dTU23PlCjoAwTnN1j4FY3cBuI9jPD7gUElfDhQ&oe=65BE9357' alt='Cachapas' />
      <p>¡Listo! Ahora puedes disfrutar de unos deliciosas cachapas de  Esta es una receta básica, pero puedes experimentar con diferentes tipos de quesos o añadir otros ingredientes  según tus preferencias. ¡Buen provecho!</p>

       
      
    </div>
    </div>
  );
};

export default Recetas;