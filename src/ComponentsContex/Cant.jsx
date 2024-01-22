



import React, { createContext, useState } from 'react';

export const AmountContext = createContext();

export const AmountContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  const addition = () => setAmount(amount + 1);
  const subtract = () => setAmount(amount - 1);

  const contextValue = {
    amount,
    addition,
    subtract,
  };

  return <AmountContext.Provider value={contextValue}>{children}</AmountContext.Provider>;
};

    
  
        