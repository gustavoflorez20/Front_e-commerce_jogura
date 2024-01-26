import React, { useState, useEffect } from 'react';

const CookieAlert = ({ onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose("close");
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    show && (
      <div className="cookie-alert" style={cookieAlertStyle}>
        <div className="cookie-alert-content" style={cookieAlertContentStyle}>
          <p style={cookieAlertText}>
            Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando, aceptas el uso de cookies.
          </p>
          <div className='flex justify-around '>
          <div>
          <button onClick={handleClose} style={acceptButtonStyle}>
            Rechazar
          </button> </div>
          <div>
          <button onClick={handleClose} style={acceptButtonStyle}>
            Aceptar
          </button> 
          </div>
          </div>
        </div>
        </div>
    )
  );
};

// Estilos en línea
const cookieAlertStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '15px',
  textAlign: 'center',
};

const cookieAlertContentStyle = {
  
  maxWidth: '600px',
  margin: '0 auto',
};

const cookieAlertText = {
  fontSize: '14px',
  marginBottom: '10px',
};

const acceptButtonStyle = {
  backgroundColor: 'red',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
};

export default CookieAlert;
