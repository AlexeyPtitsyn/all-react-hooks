/**
 * @file Alert component that uses context in useContext example.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React from 'react';
import { useAlert } from "./ContextAlertContext.jsx";

export default function ContextAlertComponent() {

  const { visible } = useAlert();

  if(!visible) return null;

  return (
    <div className="alert">Alert!!!</div>
  );
};
