/**
 * @file useContext examples.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React from 'react';

// Context allows you to pass data through tree of components without passing
// data from every parent to children.

// Get context wrapper
import { AlertProvider } from "./ContextAlertContext.jsx";

// Components that use context
import ContextAlertComponent from "./ContextAlertComponent.jsx";
import ContextMainComponent from "./ContextMainComponent.jsx";

function ContextComponent() {
  return (
    <AlertProvider>
      <div>
        <ContextAlertComponent />
        <ContextMainComponent />
      </div>
    </AlertProvider>
  );
}

export default ContextComponent;
