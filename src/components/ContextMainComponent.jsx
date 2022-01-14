/**
 * @file Main component that uses context in useContext example.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React from 'react';
import { useAlert } from "./ContextAlertContext.jsx"

export default function ContextMainComponent () {
  const { toggle } = useAlert();

  return (
    <>
      <button onClick={toggle}>Show/hide alert</button>
    </>
  )
};
