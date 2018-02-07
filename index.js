import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { defaultSlackArchivePath } from './util/globalPaths'
import getAllMiddleware from './middleware/getAllMiddleware'
import { loadArchive } from './actions/index'
import { app } from 'electron'

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancers = composeEnhancers(
  getAllMiddleware(),
    // other store enhancers if any
  );

const store = createStore(rootReducer, enhancers);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'));

store.subscribe(render)

window.onload = function()
{
  render()
  store.dispatch(loadArchive(defaultSlackArchivePath))
    // TODO: replace this with restoring from a persisted value.  But we should also make it where even if this fails the displayed value is the persisted value
}
