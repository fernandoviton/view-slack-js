import React, { Component, PropTypes } from 'react'
import loadChannel from '../middleware/loadChannel'

export default class MessageGroups extends Component {
  render() {
		const { store } = this.context
		const { messageGroups, channelName } = store.getState().channel
		const onClick = (messsageGroupName) => {
			// store.dispatch(loadMessages(store, messageGroupName))
		}

    return (
			<div>
			<ul>
				{messageGroups.map((messageGroup) => {
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