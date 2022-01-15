/**
 * @file useReducer example component.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React from "react";
import { AlertProvider } from "./ReducerAlertContext.jsx";
import ReducerAlertComponent from "./ReducerAlertComponent.jsx";
import ReducerMainComponent from "./ReducerMainComponent.jsx";

function ReducerComponent() {
  return (
    <AlertProvider>
      <div>
        <ReducerAlertComponent />
        <ReducerMainComponent />
      </div>
    </AlertProvider>
  );
}

export default ReducerComponent;
