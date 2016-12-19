import React, { Component, PropTypes } from 'react'
import loadChannel from '../middleware/loadChannel'


export default class Channels extends Component {
  render() {
		const { store } = this.context;
		const { channels } = store.getState()
		const channelOnClick = (channelName) => {
			loadChannel(store, channelName)
		}

    return (
			<div>
			<ul>
				{channels.items.map((channel) => {
            return <li key={channel.id} onClick={() => channelOnClick(channel.name)}>
							{channel.name}
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