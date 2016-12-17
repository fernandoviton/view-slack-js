import React, { Component, PropTypes } from 'react'
import loadConversation from '../middleware/loadConversation'


export default class Channels extends Component {
  render() {
		const { store } = this.context;
		const { channels } = store.getState()
		const channelOnClick = (channelName) => {
			loadConversation(store, channelName)
		}

    return (
			<div>
			<ul>
				{channels.items.map(function(listValue){
            return <li key={listValue.id} onClick={() => channelOnClick(listValue.name)}>
							{listValue.name}
						</li>;
          })}
			</ul>
			</div>
      );
  }
}
Channels.contextTypes = {
  store: React.PropTypes.object
}
//Channels.propTypes = {
//  channels: PropTypes.array.isRequired
//}