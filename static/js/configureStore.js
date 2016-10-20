import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'prod') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;