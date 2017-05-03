import { applyMiddleware } from 'redux';
import loadArchiveMiddleware from './loadArchiveMiddleware'

export default () => applyMiddleware(loadArchiveMiddleware)