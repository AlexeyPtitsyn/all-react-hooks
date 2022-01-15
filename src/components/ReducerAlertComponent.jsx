/**
 * @file Component that uses reducer for useReducer example.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React from 'react';
import { useAlert } from "./ReducerAlertContext.jsx";

export default function ReducerAlertComponent() {

  const alert = useAlert();

  if(!alert.visible) return null;

  return (
    <div className="alert" onClick={alert.hide}>Alert. Click to hide.</div>
  );
};
