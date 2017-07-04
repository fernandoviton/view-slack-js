import React from 'react';

const listStyle = { listStyle: 'none', padding: 10 };
const itemStyle = { padding: 10, borderWidth: 0.1, borderRadius: 0.1, borderColor: '#dddddd' };
const itemStyleSearchResult = { ...itemStyle, backgroundColor: '#ddaa00' };

// style={message.display.isActiveSearchResult ? itemStyleSearchResult : itemStyle}
const messageHtml = message => (
	<li
		key={message.id}
		style={itemStyle}
	>
		{`${message.userDisplayName}: ${message.text}`}
	</li>);

export default class MessageView extends React.Component {
	render() {
		const { store } = this.context;
		const state = store.getState();

		return (
			<div style={{ fontFamily: 'Tahoma, Verdana, Segoe, sans-serif' }}>
				<ul style={listStyle}>
				{
					state.activeMessages.map(message => messageHtml(message))
				}
				</ul>
			</div>);
		// return (<div>
		//   <div>
		//      <button onClick={() => { store.dispatch(toggleSettingsUi()); }}>...</button>
		//      <Settings />
		//      <Channels />
		//      <Search />
		//   </div>
		//   <div>
		//     <Messages />
		//   </div>
		// </div>);
	}
}
MessageView.contextTypes = {
	store: React.PropTypes.object,
};
