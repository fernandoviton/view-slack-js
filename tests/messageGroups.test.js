import { startLoadMessageGroups, finishedLoadMessageGroups, setActiveMessageGroup } from '../actions/index.js'
import messageGroups from '../reducers/messageGroups'

test('default messageGroups state', () => {
	expect(messageGroups(undefined, {type: undefined}))
		.toEqual({
			isLoading: false, 
			activeMessageGroupName: undefined, 
			items: []
		})
})

test('start load messageGroups sets loading state to true', () => {
	expect(messageGroups(undefined, startLoadMessageGroups()).isLoading).toEqual(true)
})

test('start load messageGroups sets active messageGroups name to undefined', () => {
	expect(messageGroups({activeMessageGroupName: 'hi'}, startLoadMessageGroups()).messageGroups).toEqual(undefined)
})

test('start load messageGroups empties items', () => {
	expect(messageGroups({items: ['anything']}, startLoadMessageGroups()).items).toEqual([])
})

test('finished load messageGroups sets loading state to false', () => {
	expect(messageGroups(undefined, finishedLoadMessageGroups(['anything'])).isLoading).toEqual(false)
})

test('finished load messageGroups sets active messageGroups name to undefined', () => {
	expect(messageGroups({activeMessageGroupName: 'hi'}, finishedLoadMessageGroups(['anything'])).messageGroups)
		.toEqual(undefined)
})

test('finished load messageGroups sets items', () => {
	expect(messageGroups(undefined, finishedLoadMessageGroups(['a', 'b'])).items)
		.toEqual([{id: 'a', name: 'a'}, {id: 'b', name: 'b'}])
})

test('set active messageGroup sets', () => {
	expect(messageGroups(undefined, setActiveMessageGroup('theGroup')).activeMessageGroupName)
		.toEqual('theGroup')
})