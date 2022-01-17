/**
 * @file Own hook example part - "useInput" hook.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import { useState } from 'react';

/**
 * @typedef {Object} UseInputReturn
 * @property {string} value - Current input value.
 * @property {function} onChange - OnChange callback function.
 */

/**
 * "Use input" hook that can be used in any component.
 * @param {string} initialValue - Initial value.
 * @returns {UseInputReturn}
 */
 function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange
  }
}

export default useInput;
