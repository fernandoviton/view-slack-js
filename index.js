import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import loadChannels from './middleware/loadChannels'
import loadUsers from './middleware/loadUsers'
import { defaultSlackArchivePath } from './util/globalPaths'
import getAllMiddleware from './middleware/getAllMiddleware'
import { loadArchive } from './actions/index'

const store = createStore(rootReducer, getAllMiddleware());
console.log('created store', store.getState())
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
