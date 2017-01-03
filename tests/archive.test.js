import { startLoadArchive, finishedLoadArchive, setArchiveDisplayPath } from '../actions/index.js'
import archive from '../reducers/archive'

const defaultState = 	{
			isLoading: false,
			displayPath: '',
			localPath: undefined
		}

test('default archive state', () => {expect(archive(undefined, {type: undefined})).toEqual(defaultState)})

test('start loading archive only sets loading state to true', () => {
	expect(archive(defaultState, startLoadArchive())).toEqual({...defaultState, isLoading: true})
})

test('finished loading archive sets loading state to false', () => {
	expect(archive(undefined, finishedLoadArchive('any path')).isLoading).toEqual(false)
	expect(archive(undefined, finishedLoadArchive('any path', 'any error')).isLoading).toEqual(false)
})

test('finished loading archive sets paths', () => {
	const newState = archive(undefined, finishedLoadArchive('c'))
	expect(newState.localPath).toEqual('c')
	expect(newState.displayPath).toEqual('c')
})

test('finished loading archive sets paths', () => {
	const newState = archive(undefined, finishedLoadArchive('c'))
	expect(newState.localPath).toEqual('c')
	expect(newState.displayPath).toEqual('c')
})

test('finished loading archive of undefined path sets default state', () => {
	expect(archive(defaultState, finishedLoadArchive(undefined))).toEqual(defaultState)
})

test('set display path only sets display path', () => {
	expect(archive(defaultState, setArchiveDisplayPath('a'))).toEqual({...defaultState, displayPath: 'a'})
})