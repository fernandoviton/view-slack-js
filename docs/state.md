### State description

state
- settings
	- hiddenUi
- channels
	- isLoading
	- activeChannelName
	- items[]
- messageGroups
	- isLoading
	- items[] : {
		- name
		- messages : {
			- isLoading
			- items[] : message
		}
	}

message
	- id
	- text

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