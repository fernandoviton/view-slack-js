import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Root from './components/root';
import rootReducer from './reducers/rootReducer';
import { defaultSlackArchivePath } from './util/globalPaths';
import { loadArchive } from './actions/index';
import middlewares from './middleware/index';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );

const store = createStore(rootReducer, enhancers);

console.log('created store', store.getState());
const render = () => ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'));

store.subscribe(render);

window.onload = () => {
  render();
  store.dispatch(loadArchive(defaultSlackArchivePath));
    // TODO: replace this with restoring from a persisted value.
    // But we should also make it where even if this fails the displayed
    // value is the persisted value
};
