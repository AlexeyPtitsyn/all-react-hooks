/**
 * @file Component that uses reducer for useReducer example.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React from "react";
import { useAlert } from "./ReducerAlertContext.jsx"

export default function ReducerMainComponent () {
  const { show } = useAlert();

  return (
    <>
      <button onClick={show}>Show alert</button>
    </>
  )
};
