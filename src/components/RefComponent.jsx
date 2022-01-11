/**
 * @file useRef examples and caveats.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React, { useEffect, useState, useRef } from "react";

function RefComponent() {
  const [value, setValue] = useState(0);

  // Example with any variable that can be used like state, but without
  // re-rendering component each time it is changed.

  const renderCount = useRef(1); // One, since it cant be initialized
                                 // before we initialize it :-)

  useEffect(() => {
    // Look, we can't use useState here. Because this will cause
    // infinite re-render.
    renderCount.current++;
  });

  // Monitor previous button pressed count:
  const valPrev = useRef(0);

  useEffect(() => {
    valPrev.current = value;
  }, [value]);

  // Autofocus on load. A canonical usage of useRef.
  const btnRef = useRef(null);
  useEffect(() => {
    btnRef.current.focus();
  }, []);

  return (
    <div>
      <button ref={ btnRef } onClick={() => { setValue(value + 1); }}>Button pressed { value } times</button>
      <div>
        Render count: { renderCount.current }
        <br />
        Previous button pressed count: { valPrev.current }
      </div>
    </div>
  );
}

export default RefComponent; 