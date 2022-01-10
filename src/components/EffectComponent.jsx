/**
 * @file useEffect examples and caveats.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React, { useEffect, useState } from "react";

/**
 * Return page content depending on page name.
 * 
 * @param {string} name Page name
 * @returns {string}
 */
function getContent(name) {
  const content = {
    'default': 'Default page...',
    'second': 'Second page...'
  }

  if(typeof name === 'undefined') return content['default'];

  return content[name];
} // getContent();

/**
 * Effect component.
 */
function EffectComponent() {
  const [page, setPage] = useState('default');
  const [content, setContent] = useState(getContent);

  // No second attribute: Fired only if component props/state changes:
  useEffect(() => {
    console.log('Rendering...');
  });
  
  // Empty second attribute. Fired only once. When component ready.
  useEffect(() => {
    console.log('ComponentDidMount...');
  }, []);

  // Loads additional content depending on page change:
  useEffect(() => {
    setContent(getContent(page));
  }, [page]);

  // Do not forget remove event listeners of a non-react events:
  const [mouseCoords, setMouseCoords] = useState({
    x: 0,
    y: 0
  });

  function mouseMove(e) {
    setMouseCoords({
      x: e.clientX,
      y: e.clientY
    });
  }

  // Do not forget remove event listeners of a non-react events:
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return (
    <div>
      Navigation:
      <button onClick={() => { setPage('default')}}>Default page</button>
      <button onClick={() => { setPage('second')}}>Second page</button>

      <div>
        { content }
      </div>

      <div>Mouse X = { mouseCoords.x }; Y = { mouseCoords.y }</div>
    </div>
  );
}

export default EffectComponent;
