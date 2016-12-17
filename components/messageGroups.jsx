import React, { Component, PropTypes } from 'react'
import { loadConversation } from '../actions/index.js'

export default class MessageGroups extends Component {
  render() {
		const { store } = this.context
		const { messageGroups, channelName } = store.getState().conversation
		const onClick = (messageGroupName) => {
			store.dispatch(loadConversation(store, channelName))
		}

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