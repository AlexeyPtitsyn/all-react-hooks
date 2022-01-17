/**
 * @file Index react component.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import IntroComponent from './components/IntroComponent.jsx';
import StateComponent from './components/StateComponent.jsx';
import EffectComponent from './components/EffectComponent.jsx';
import RefComponent from './components/RefComponent.jsx';
import MemoComponent from './components/MemoComponent.jsx';
import CallbackComponent from './components/CallbackComponent.jsx';
import ContextComponent from './components/ContextComponent.jsx';
import ReducerComponent from './components/ReducerComponent.jsx';
import OwnHookComponent from './components/OwnHookComponent.jsx';

/**
 * Root react component.
 */
function MainComponent() {
  const [page, setPage] = useState("index");

  function changePage(e) {
    e.preventDefault();
    setPage(e.target.dataset.name);
  }

  /**
   * @typedef {Object} ComponentsListItem
   * @property {string} name - Component page name.
   * @property {string} title - Component page title.
   * @property {JSX.Element} component - Component itself.
   */

  /** @type {ComponentsListItem[]} */
  const components = useMemo(() => {
    const comps = [
      {
        name: 'index',
        title: 'Index',
        component: <IntroComponent />
      },
      {
        name: 'useState',
        title: 'useState',
        component: <StateComponent />
      },
      {
        name: 'useEffect',
        title: 'useEffect',
        component: <EffectComponent />
      },
      {
        name: 'useRef',
        title: 'useRef',
        component: <RefComponent />
      },
      {
        name: 'useMemo',
        title: 'useMemo',
        component: <MemoComponent />
      },
      {
        name: 'useCallback',
        title: 'useCallback',
        component: <CallbackComponent />
      },
      {
        name: 'useContext',
        title: 'useContext',
        component: <ContextComponent />
      },
      {
        name: 'useReducer',
        title: 'useReducer',
        component: <ReducerComponent />
      },
      {
        name: 'useOwnHook',
        title: 'useOwnHook',
        component: <OwnHookComponent />
      }
    ];
    return comps;
  }, []);

  const links = components.map((item, i) => {
    return (
      <a key={i} className="nav-link" href="#" onClick={changePage} data-name={item.name}>{item.title}</a>
    );
  });

  const activeItem = components.find((item) => {
    return item.name == page;
  });

  return (
    <>
      <header>All React hooks example</header>
      <main>
        <nav>
          { links }
        </nav>

        <article>
          { activeItem.component }
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
