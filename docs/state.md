state
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

-- message:
	{
		id
		text
	}

Loading messages:
1. Adding more messages consists of:
	a. change state to start loading for the ones in progress
	b. trigger asyncs to get data
	c. change state to finish loading with data.  This will create new array of messageGroups.items 
	with the affected items udpate
1.5.  Changing messageGroups consists of:
	a. clearing active messages
2. To display messages:
	a. display each message group in order (with headers as desired)
	b. display a "load more" or "loading" ui element before and/or after the messages 
3. Data structure needed for this:
	a. ordered (by date - which is name) list of message groups
	b. linear speed access to message groups on write ok
4. Actions for this:
	a. [start|finished]LoadMessages

data flow
1. load channels
2. set active channel
3. load message groups
4. set active message group
5. load messages
6. set messages