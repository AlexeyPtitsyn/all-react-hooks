/**
 * @file Index react component.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import IntroComponent from './components/IntroComponent.jsx';
import StateComponent from './components/StateComponent.jsx';
import EffectComponent from './components/EffectComponent.jsx';
import RefComponent from './components/RefComponent.jsx';
import MemoComponent from './components/MemoComponent.jsx';
import CallbackComponent from './components/CallbackComponent.jsx';

/**
 * Root react component.
 */
function MainComponent() {
  const [page, setPage] = useState("index");

  function changePage(e) {
    e.preventDefault();
    setPage(e.target.dataset.name);
  }

  return (
    <>
      <header>All React hooks example</header>
      <main>
        <nav>
          <a className="nav-link" href="#" onClick={changePage} data-name="index">Index</a>
          <a className="nav-link" href="#" onClick={changePage} data-name="useState">useState</a>
          <a className="nav-link" href="#" onClick={changePage} data-name="useEffect">useEffect</a>
          <a className="nav-link" href="#" onClick={changePage} data-name="useRef">useRef</a>
          <a className="nav-link" href="#" onClick={changePage} data-name="useMemo">useMemo</a>
          <a className="nav-link" href="#" onClick={changePage} data-name="useCallback">useCallback</a>
        </nav>

        <article>
          {page == 'index' &&
            <IntroComponent />
          }

          {page == 'useState' &&
            <StateComponent />
          }

          {page == 'useEffect' &&
            <EffectComponent />
          }

          {page == 'useRef' &&
            <RefComponent />
          }

          {page == 'useMemo' &&
            <MemoComponent />
          }

          {page == 'useCallback' &&
            <CallbackComponent />
          }
        </article>
      </main>
      <footer>&copy; 2022, Alexey Ptitsyn</footer>
    </>
  );
}


ReactDOM.render(
  <MainComponent />,
  document.getElementById('app')
);
