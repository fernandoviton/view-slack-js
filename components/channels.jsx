import React, { Component, PropTypes } from 'react'

export default class Channels extends Component {
  render() {
		const { channels } = this.props
    return (
			<div>
				{channels.map(function(listValue){
            return <p key={listValue.id}>{listValue.name}</p>;
          })}
			</div>
      );
  }
}

Channels.propTypes = {
  channels: PropTypes.array.isRequired
}