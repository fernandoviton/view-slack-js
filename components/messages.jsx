import React, { Component, PropTypes } from 'react'
import MessageGroups from './messageGroups'

export default class Messages extends Component {
	render() {
    const { store } = this.context;
    const { messages } = store.getState().channel;
    return (
      <div>
        <MessageGroups/>
        <ul>
          {messages.map((message) => {
              return <li key={message.id}>
                {message.text}
              </li>;
            })}
        </ul>
      </div>
      );
  }
}
Messages.contextTypes = {
  store: React.PropTypes.object
}