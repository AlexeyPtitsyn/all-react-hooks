/**
 * @file useMemo examples and caveats.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React, { useState, useMemo } from "react";

function multiply(num) {
  return num * 2;
}

function MemoComponent() {
  const [counter, setCounter] = useState(100);

  // Wrong way: multiply method is re-calculating each time the component
  // redraw.
  //const multipliedValue = multiply(counter);

  // Right way: useMemo stores this value until the depending variable counter
  // changes.
  const multipliedValue = useMemo(() => {
    return multiply(counter);
  }, [counter]);

  // The same with objects:
  // Complex objects better to define when it needed. Not in every render.
  const styles = useMemo(() => ({
    color: counter % 2 === 0 ? 'navy' : 'red'
  }), [counter]);

  return (
    <>
      <button onClick={() => { setCounter(oldVal => oldVal + 1); }}>Add counter (current: { counter })</button>
      <div style={ styles }>Multiplied by two: { multipliedValue }</div>
    </>
  );
}

export default MemoComponent;