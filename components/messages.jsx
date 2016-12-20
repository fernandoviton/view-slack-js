import React, { Component, PropTypes } from 'react'
import MessageGroups from './messageGroups'

export default class Messages extends Component {
	render() {
    const { store } = this.context;
    const { items } = store.getState().messages;
    return (
      <div>
        <MessageGroups/>
        <ul>
          {items.map((message) => {
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