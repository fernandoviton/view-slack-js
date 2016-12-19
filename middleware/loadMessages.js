export default (store, messageGroupName) => {
	const channelName = store.getState().channel.channelName
	const channelPath = makePath(defaultSlackArchivePath, channelName)
	store.dispatch(startLoadMessages())
	const dailyArchivesNames = getDailyArchiveNames(channelPath)
	const currentDailyArchivePath = makePath(channelPath, messageGroupName)
	const messages = getMessagesFromDailyArchive(lastDailyArchivePath)
	// TODO: need to update currentMessaeGroupName too
	store.dispatch(finishedLoadMessages(messages))
}