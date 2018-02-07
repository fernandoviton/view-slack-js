import { applyMiddleware } from 'redux';
import createDebounce from 'redux-debounced';
import loadArchiveMiddleware from './loadArchiveMiddleware';

export default () => applyMiddleware(createDebounce(), loadArchiveMiddleware);