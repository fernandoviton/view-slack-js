import { applyMiddleware } from 'redux';

const tempDefaultMiddleware = store => next => action => action;

export default () => applyMiddleware(tempDefaultMiddleware);