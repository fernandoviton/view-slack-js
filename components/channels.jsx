import React, { Component, PropTypes } from 'react'
import { loadChannel } from '../actions/index.js'


export default class Channels extends Component {
  render() {
		const { store } = this.context;
		const { channels } = this.props
		const channelOnClick = (channelName) => {
			store.dispatch(loadChannel(store.getState().achiveRootPath, channelName))
		}
    return (
			<div>
			<ul>
				{channels.map(function(listValue){
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
Channels.propTypes = {
  channels: PropTypes.array.isRequired
}