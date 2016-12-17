import React, { Component, PropTypes } from 'react'
import { loadConversation } from '../actions/index.js'

export default class MessageGroups extends Component {
  render() {
		const { store } = this.context
		const { messageGroups } = store.getState().currentConversation
		const onClick = (messageGroupName) => {
			store.dispatch(loadConversation(
				store.getState().achiveRootPath, 
				store.getState().currentChannelName,
				messageGroupName))
		}

		// TODO: instead of undefined we should just always have empty at least
		if (messageGroups === undefined)
			return (<div/>)

    return (
			<div>
			<ul>
				{messageGroups.map(function(messageGroup){
            return <li key={messageGroup.id} onClick={() => onClick(messageGroup.name)}>
							{messageGroup.name}
						</li>;
          })}
			</ul>
			</div>
      );
  }
}
MessageGroups.contextTypes = {
  store: React.PropTypes.object
}
//MessageGroups.propTypes = {
// messageGroups: PropTypes.array.isRequired
//}