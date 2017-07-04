import { applyMiddleware } from 'redux';
import loadChannelsMiddleware from '../domains/messages/loadChannelsMiddleware';

const tempDefaultMiddleware = store => next => action => next(action);

export default () => applyMiddleware(tempDefaultMiddleware);