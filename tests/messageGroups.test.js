import { setMessageGroups, setMessages } from '../actions/index.js'
import messageGroups from '../reducers/messageGroups'

test('default messageGroups state', () => {
	expect(messageGroups(undefined, {type: undefined}))
		.toEqual({
			items: []
		})
})

test('setMessageGroups sets items with name and empty messages', () => {
	expect(messageGroups(undefined, setMessageGroups([{name: 'a'}, {name: 'b'}])).items)
		.toEqual([{name: 'a', messages: createEmptyMessages()}, {name:'b', messages: createEmptyMessages()}])
})

test('setMessages when no items is no-op', () => {
	expect(messageGroups({items:[]}, setMessages('a', ['anything'])))
		.toEqual({items:[]})
})

test('fsetMessages when item is not present is no-op', () => {
	expect(messageGroups({items:[{name: 'b'}]}, setMessages('a', ['anything'])))
		.toEqual({items:[{name: 'b'}]})
})

test('setMessages of "a" will sets fields of "a"', () => {
	const messageItems = [{ts: 'a', text: 'aText'}, {ts: 'b', text: 'bText'}]
	const messageItemsExpected = {items: [{id: 'a', text: 'aText'}, {id: 'b', text: 'bText'}]}
	expect(messageGroups({items:[{name: 'a'}, {name: 'b'}]}, setMessages('a', messageItems)).items)
		.toEqual([{name: 'a', messages: messageItemsExpected}, {name: 'b'}])
})

const createEmptyMessages = () => {
	return {
		items: []
	}
}