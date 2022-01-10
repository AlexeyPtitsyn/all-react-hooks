/**
 * @file useState examples and caveats.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React, { useState } from "react";

// Let initial state will be computed.
function initialState() {
  console.log('State initialized.');
  return 5;
}

function StateComponent() {

  // If we pass the init function like this, it will be fired only once.
  // Not in every redraw.
  const [counter, setCounter] = useState(initialState);

  function increase() {
    // `setX` is async function. So, if we fire it twice,
    // value can be changed while the component is redrawing.
    // We can use callback with previous value as an attribute
    // to avoid this.
    setCounter((prevValue) => {
      return prevValue + 1;
    });
    setCounter((prevValue) => {
      return prevValue + 1;
    })
  }

  function decrease() {
    // Fires only once (see above):
    setCounter(counter - 1);
    setCounter(counter - 1);
  }

  // Object initial state will be constructed (but not used) on every redraw.
  // Sometimes this is important on complex objects, and such objects should be
  // created as in `[counter, setCounter]` above.
  const [obj, setObj] = useState({
    fieldOne: 1,
    fieldTwo: 2
  });

  // In case of object in state, we should return full object in the setState
  // attribute. Otherwise the object will contain only one field.
  function updateObject() {
    setObj({
      ...obj,
      fieldOne: Date.now()
    });
  }

  return (
    <div>
      <span>Counter { counter }</span>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      
      <hr />

      <button onClick={updateObject}>Update object</button>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
    </div>
  );
}

export default StateComponent;