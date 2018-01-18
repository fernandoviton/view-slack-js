import sideEffects from '../sideeffects/index';
import toMiddleware from './toMiddleware';
import loadArchiveMiddleware from './loadArchiveMiddleware';

const sideEffectsAsMiddleware = sideEffects
	.map(sideEffect => toMiddleware(sideEffect));

export default [
	loadArchiveMiddleware,
	...sideEffectsAsMiddleware,
];