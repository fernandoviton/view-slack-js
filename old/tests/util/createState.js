export const createEmptyMessages = () => ({
	items: [],
});

export const createEmptyMessageGroup = () => ({
	items: [],
});

export const createMessagesFromText = textList => ({
	...createEmptyMessages(),
	items: textList.map(text => ({
		id: text,
		text,
	})),
});

export const createMessageGroupFromText = (name, textList) => ({
	name,
	messages: createMessagesFromText(textList),
});

// textLists should be of this format:
// [ { name: 'group1', messages: ['a', 'b'] }, { name: 'group2', messages: ['c', 'd'] }]
export const createMessagesGroupsFromText = textLists => ({
	...createEmptyMessageGroup(),
	items: textLists.map(textList => createMessageGroupFromText(textList.name, testList.messages)),
});

export const createStateWithMessagesFromText = textLists => ({
});