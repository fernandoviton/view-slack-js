import { startLoadUsers, finishedLoadUsers } from '../actions/index.js'
import users from '../reducers/users'

test('default user state', () => {
	expect(users(undefined, {type: undefined})).toEqual(
		{
			isLoading: false, 
			items: []})
		})

test('start loading users sets loading state to true', () => {
	expect(users(undefined, startLoadUsers()).isLoading).toEqual(true)
})

test('start loading users empties items', () => {
	expect(users({items: ['a']}, startLoadUsers()).items).toEqual([])
})

test('finished loading users sets loading state to false', () => {
	expect(users(undefined, finishedLoadUsers([{name: 'new', id: 'a'}])).isLoading).toEqual(false)
})

test('finished loading users sets items', () => {
	expect(users({items: 'something'}, finishedLoadUsers([{name: 'new', id:'a'}])).items)
		.toEqual([{id: 'a', name: 'new'}])
})