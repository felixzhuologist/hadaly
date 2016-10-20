import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { StyleRoot } from 'radium';
import Home from './components/Home';
import rootReducer from './reducers/rootReducer'

// Needed for onTouchTap can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <StyleRoot>
    <Provider store={store}>
      <Home />
    </Provider>
  </StyleRoot>,
  document.getElementById('app')
);
