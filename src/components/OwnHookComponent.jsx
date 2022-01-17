/**
 * @file Own hook example.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React from 'react';

import useInput from './UseInput.jsx';

function OwnHookComponent () {

  const input = useInput('');

  return (
    <>
      <input type="text" {...input} />
    </>
  )
}

export default OwnHookComponent;
