import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import loadChannel from '../middleware/loadChannel'

export default class Channels extends Component {
  render() {
		const { store } = this.context;
		const { channels } = store.getState()
		const onChange = (selectedOption) => {
			loadChannel(store, selectedOption.value)
		}

		const options=channels.items.map(
			(channel) => ({
					value: channel.name,
					label: channel.name,
					clearableValue: false
				}))

    return (
			<div style = {{fontFamily: "Tahoma, Verdana, Segoe, sans-serif"}}>
			<Select
				clearable={false}
				name="channels"
				value={channels.activeChannelName}
				onChange={onChange}
				options={options}
				placeholder='Select a Channel'/>
			</div>
      )
  }
}
Channels.contextTypes = {
  store: React.PropTypes.object
}
//Channels.propTypes = {
//  channels: PropTypes.array.isRequired
//}