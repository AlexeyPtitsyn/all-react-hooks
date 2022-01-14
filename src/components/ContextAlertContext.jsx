/**
 * @file Context provider for useContext example.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React, { useContext, useState } from 'react';

const AlertContext = React.createContext();

// This context will be used in components
export const useAlert = () => {
  return useContext(AlertContext);
};

// Context wrapper
export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => setAlert(prev => !prev);

  return (
    <AlertContext.Provider value={{
      visible: alert,
      toggle: toggleAlert
    }}>
      { children }
    </AlertContext.Provider>
  )
};
