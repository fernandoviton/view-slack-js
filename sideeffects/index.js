// A side effect is really a subset of middleware.  It only gets access to
// state (pre and post reduction) and dispatch.
// As a result of this it can't interrupt or change the reduction - it
// can only affect state through dispatch (and can make external and async
// calls to other services).
import loadArchive from './loadArchive';

export default [
	loadArchive,
];
