/**
 * @file Context for useReducer example.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React, { useContext, useReducer } from 'react';

const AlertContext = React.createContext();

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true
      };

    case HIDE_ALERT:
      return {
        ...state,
        visible: false
      };

    default:
      return state;
  }
}

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false
  });

  const show = () => dispatch({ type: SHOW_ALERT });

  const hide = () => dispatch({type: HIDE_ALERT });

  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      show,
      hide
    }}>
      { children }
    </AlertContext.Provider>
  )
};