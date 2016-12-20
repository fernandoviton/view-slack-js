import React, { Component, PropTypes } from 'react'
import loadMessages from '../middleware/loadMessages'
import Select from 'react-select'

export default class MessageGroups extends Component {
  render() {
		const { store } = this.context
		const { messageGroups } = store.getState()
		const onChange = (selectedOption) => {
			loadMessages(store, selectedOption.value)
		}

		const options=messageGroups.items.map(
			(messageGroup) => ({
					value: messageGroup.name,
					label: messageGroup.name,
					clearableValue: false
				}))

    return (
			<div>
			<Select
				clearable={false}
				name="messageGroups"
				value={messageGroups.activeMessageGroupName}
				onChange={onChange}
				options={options}
				placeholder=''/>
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