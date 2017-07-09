import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import getAppState from '../Reducers/getAppState';
import World from './World';

let store = createStore(getAppState);

function tick(time?: number) {
  requestAnimationFrame(tick);

  store.dispatch({ type: 'TICK' });
}

tick();

ReactDOM.render(
  <Provider store={store}>
    <World />
  </Provider>,
  document.getElementById('app')
);