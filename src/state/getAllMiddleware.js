import { applyMiddleware } from 'redux';

const tempDefaultMiddleware = store => next => action => next(action);

export default () => applyMiddleware(tempDefaultMiddleware);