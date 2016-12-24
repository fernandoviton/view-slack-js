import React, { Component, PropTypes } from 'react'
import MessageGroups from './messageGroups'

const htmlItemFromMessage = (message) => {
  return <li key={message.id}>
                  {message.text}
                </li>;
}

const htmlItemsFromMessageGroup = (messageGroup) => {
  return messageGroup.messages.items.map((message) => {
    return htmlItemFromMessage(message)
  })
}

const htmlMessageGroupHeader = (date) => {
  return <h><font color="red">{date}</font></h>
}

export default class Messages extends Component {
	render() {
    const { store } = this.context;
    const { items } = store.getState().messageGroups;
    return (
      <div>
        <MessageGroups/>
        <ul>
          {items.map((messageGroup) => {
            return messageGroup.messages.items.length == 0 
              ? []
              : [htmlMessageGroupHeader(messageGroup.name), htmlItemsFromMessageGroup(messageGroup)]
          })}
        </ul>
      </div>
      );
  }
}
Messages.contextTypes = {
  store: React.PropTypes.object
}