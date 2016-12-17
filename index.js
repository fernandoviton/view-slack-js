import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loadDefaultSlack from './middleware/loadDefaultSlack'
import { defaultSlackArchivePath } from './util/paths'

const store = createStore(rootReducer);
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
  loadDefaultSlack(store, defaultSlackArchivePath)
}
