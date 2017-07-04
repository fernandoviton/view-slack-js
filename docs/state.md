### State description

// TODO: update docs, merge messageGroups/Messages, switch to action based reducers, get rid of fake reducers
// TODO: turn this into a type lint?

state
- settings
	- hiddenUi
	- loadArchiveErrorMsg
- archive
	- isLoading
	- displayPath (can be different than other paths if the user is in progress of inputting path or we haven't yet loaded info from path)
	- localPath
- users
- channels
	- isLoading
	- activeChannelName
	- items[]
- messageGroups
	- items[] : {
		- name
		- messages : {
			- items[] : message
		}
	}
- activeSearch
	- searchText

message
	id
	text
	user
	display: {
		isActiveSearchResult
	}

### Messages details:
1. Adding more messages to a loaded message group consists of:
	a. dispatch a startLoadMessages to start loading for the messageGroup (messageGroups.items) in progress
	b. fetch the data (likely through an async)
	c. dispatch a finishedLoadMessages to push the changed data into the state
2. To render messages
	a. display each message group in order (with headers as desired)
	b. display a "load more" or "loading" ui element before and/or after the messages
3. Data structure needed for this:
	a. ordered (by date - which is name) list of message groups
	b. linear speed access to message groups on write is good enough (for read)

### Basic Flow
1. load channels
2. set active channel
3. load message groups
4. load messages
5. set messages

### Flow for setting state that needs validating
1. User types in control
2. On enter or whenever we are ready to commit the new value we trigger a startFoo action (via some middelware)
3. This state is commited (that we are in progress)
4. (UI can show based on this if it wants - like a spinner etc)
5. Middleware starts asyncs and otherwise resolves the validity of the new value
NOTE: if the data can be validated synchronously it could be done before step 2 instead
6. When the operation finishes (either validating and/or fetching any data) we call finishedFoo with appropriate info (possibly including failure info)