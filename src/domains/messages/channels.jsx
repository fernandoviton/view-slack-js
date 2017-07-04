import React, { Component } from 'react';
import Select from 'react-select';
import { setActiveChannel } from '../../state/actions';

export default class Channels extends Component {
  render() {
		const { store } = this.context;
		const { channels } = store.getState();
		const { activeChannelName } = store.getState();
		const onChange = (selectedOption) => {
			store.dispatch(setActiveChannel(selectedOption.value));
			// TODO: replace with a loadChannel action
		};

		const options = channels.map(
			channel => ({
					value: channel.name,
					label: channel.name,
					clearableValue: false,
				}));

		return (
			<Select
				style={{ fontFamily: 'Tahoma, Verdana, Segoe, sans-serif' }}
				clearable={false}
				name="channels"
				value={activeChannelName}
				onChange={onChange}
				options={options}
				placeholder="Select a Channel"
			/>
			);
	}
}
Channels.contextTypes = {
  store: React.PropTypes.object,
};
// Channels.propTypes = {
//  channels: PropTypes.array.isRequired
// }