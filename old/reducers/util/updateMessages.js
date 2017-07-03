const updateMessagesInGroup = (messageGroup, getUpdatedMessage) => ({
	...messageGroup,
	messages: {
		...messageGroup.messages,
		items: messageGroup.messages.items.map(message =>
			getUpdatedMessage(messageGroup.name, message)),
	},
});

// getUpdatedMessage: (messageGroupName, message) => message
export default (rootState, getUpdatedMessage) => ({
	...rootState,
	messageGroups: {
		...rootState.messageGroups,
		items: rootState.messageGroups.items.map(messageGroup =>
			updateMessagesInGroup(messageGroup, getUpdatedMessage)),
	},
});