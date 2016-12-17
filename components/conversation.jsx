import React, { Component, PropTypes } from 'react'
import MessageGroups from './messageGroups'

export default class Conversation extends Component {
	render() {
    const { store } = this.context;
    return (
      <div>
        <MessageGroups/>
      </div>
      );
  }
}
Conversation.contextTypes = {
  store: React.PropTypes.object
}