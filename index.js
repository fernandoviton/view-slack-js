import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MessageView from './src/domains/messages/messageView';
import rootReducer from './src/state/rootReducer';
import getAllMiddleware from './src/state/getAllMiddleware';

const store = createStore(rootReducer, getAllMiddleware());
console.log('created store', store.getState());
const render = () => ReactDOM.render(
  <Provider store={store}>
    <MessageView />
  </Provider>,
  document.getElementById('root'));

store.subscribe(() => {
  console.log('rendering', store.getState());
  render();
});

window.onload = () => {
  render();
  // store.dispatch(loadArchive(defaultSlackArchivePath));
    // TODO: replace this with restoring from a persisted value.  But we
    // should also make it where even if this fails the displayed value is the persisted value
    // TODO: replace with an action that doesn't know where it's comining from
};
