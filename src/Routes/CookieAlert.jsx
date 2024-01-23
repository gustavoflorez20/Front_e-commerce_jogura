import React, { useState, useEffect } from 'react';

const CookieAlert = ({ onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  useEffect(() => {
    // Mostrar el alerta sobre cookies al cargar la página
    setShow(true);
  }, []);

  return (
    show && (
      <div className="cookie-alert">
        <div className="cookie-alert-content">
          <p>
            {/* Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando, aceptas el uso de cookies. */}
          </p>
          <button onClick={handleClose}>""</button>
        </div>
      </div>
    )
  );
};

export default CookieAlert;
