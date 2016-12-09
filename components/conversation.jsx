import React, { Component, PropTypes } from 'react'

export default class Conversation extends Component {
  render() {
		const { items } = this.props
    return (
			<ul>
				{items.map(function(listValue){
            return <li key={listValue.id}>{listValue.text}</li>;
          })}
			</ul>
      );
  }
}

Conversation.propTypes = {
  items: PropTypes.array.isRequired
}