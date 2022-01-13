/**
 * @file useCallback examples and caveats.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React, { useState, useCallback } from "react";

function multiply(num) {
  return num * 2;
}

function CallbackComponent() {
  const [counter, setCounter] = useState(100);

  // useCallback returns function itself
  // (unlinke useMemo, which return result of function)
  const multipliedValue = useCallback(() => {
    return multiply(counter);
  }, [counter]);

  return (
    <>
      <button onClick={() => { setCounter(oldVal => oldVal + 1); }}>Add counter (current: { counter })</button>
      <div>Multiplied by two: { multipliedValue() }</div>
    </>
  );
}

export default CallbackComponent;
