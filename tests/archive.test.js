import { loadArchive, setArchiveDisplayPath } from '../actions/index.js'
import archive from '../reducers/archive'

const defaultState = 	{
			displayPath: '',
			localPath: undefined
		}

test('default archive state', () => {expect(archive(undefined, {type: undefined})).toEqual(defaultState)})

test('loadArchive sets localPath', () => {
	expect(archive(defaultState, loadArchive('a path'))).toEqual({...defaultState, localPath: 'a path'})
	expect(archive({...defaultState, localPath: 'old'}, loadArchive(undefined))).toEqual({...defaultState, localPath: undefined})
})

test('set display path only sets display path', () => {
	expect(archive(defaultState, setArchiveDisplayPath('a'))).toEqual({...defaultState, displayPath: 'a'})
})