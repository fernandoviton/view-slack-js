import { startLoadArchive, finishedLoadArchive, setArchiveDisplayPath } from '../actions/index.js'
import archive from '../reducers/archive'

const defaultState = 	{
			isLoading: false,
			displayPath: '',
			localPath: undefined
		}

test('default archive state', () => {expect(archive(undefined, {type: undefined})).toEqual(defaultState)})

test('start loading archive sets loading state to true and clears localPath', () => {
	expect(archive(defaultState, startLoadArchive())).toEqual({...defaultState, isLoading: true, localPath: undefined})
})

test('finished loading archive sets loading state to false and sets localPath', () => {
	expect(archive(defaultState, finishedLoadArchive('a path'))).toEqual({...defaultState, isLoading: false, localPath: 'a path'})
	expect(archive({...defaultState, localPath: 'old'}, finishedLoadArchive(undefined))).toEqual({...defaultState, isLoading: false, localPath: undefined})
})

test('set display path only sets display path', () => {
	expect(archive(defaultState, setArchiveDisplayPath('a'))).toEqual({...defaultState, displayPath: 'a'})
})