import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import Home from './components/Home';
import configureStore from './configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux';

// Needed for onTouchTap can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export const store = configureStore();

ReactDOM.render(
  <StyleRoot>
    <Provider store={store}>
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    </Provider>
  </StyleRoot>,
  document.getElementById('app')
);
