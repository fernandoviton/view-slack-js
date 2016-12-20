state
- channels
	- isLoading
	- activeChannelName
	- items[]
- messageGroups
	- isLoading
	- activeMessageGroupName
	- items[]
- messages
	- isLoading
	- items[]
		- id
		- text

data flow
1. load channels
2. set active channel
3. load message groups
4. set active message group
5. load messages
6. set messages