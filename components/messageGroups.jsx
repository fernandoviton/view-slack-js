import React, { Component, PropTypes } from 'react'

export default class MessageGroups extends Component {
  render() {
		const { messageGroups } = this.props
    return (
			<div>
			<ul>
				{messageGroups.map(function(messageGroup){
            return <li key={messageGroup.id} onClick={() => alert('messageGroup foo')}>
							{messageGroup.name}
						</li>;
          })}
			</ul>
			</div>
      );
  }
}

MessageGroups.propTypes = {
  messageGroups: PropTypes.array.isRequired
}