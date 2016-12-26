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
	const usersMap = users({items: 'something'}, finishedLoadUsers([{name: 'new', id:'a'}, {name: 'new2', id: 'b'}])).items
	expect(usersMap['a']).toEqual({ name: 'new'})
	expect(usersMap['b']).toEqual({ name: 'new2'})
	expect(usersMap.entries.length).toEqual(2)
})