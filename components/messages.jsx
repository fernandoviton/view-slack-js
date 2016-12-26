import React, { Component, PropTypes } from 'react'
import MessageGroups from './messageGroups'
import loadMessages from '../middleware/loadMessages'
import { findIndexReverse } from '../util/array'
import { stripExtension } from '../util/paths'

const getDisplayUserName = (users, userId) => {
  const user = users[userId]
  return user === undefined ? "???" : user.name
}

const htmlItemFromMessage = (message, users) => {
  return <li key={message.id}>
                  {getDisplayUserName(users, message.user) + ': ' + message.text}
                </li>;
}

const htmlItemsFromMessageGroup = (messageGroup, users) => {
  return messageGroup.messages.items.map((message) => {
    return htmlItemFromMessage(message, users)
  })
}

const htmlMessageGroupHeader = (date) => {
  return <p 
    style={{fontSize:30}}>
    <font color="red">{date}</font>
  </p>
}

const htmlLoadMoreButton = (label, onClick) => {
  return <button onClick={onClick}>{label}</button>
}

export default class Messages extends Component {
	render() {
    const { store } = this.context;
    const { items } = store.getState().messageGroups;
    const  users = store.getState().users.items;

    const indexOfFirstLoadedMessageGroup = items.findIndex((messageGroup) => {
      return messageGroup.messages.items.length > 0
    })
    const indexOfLastLoadedMessageGroup = findIndexReverse(items, (messageGroup) => {
      return messageGroup.messages.items.length > 0
    })
    const htmlShowEarlierButton = indexOfFirstLoadedMessageGroup <= 0
      ? []
      : htmlLoadMoreButton('load previous conversation', () => {
        loadMessages(store, items[indexOfFirstLoadedMessageGroup-1].name)
      })
    const htmlShowLaterButton = indexOfLastLoadedMessageGroup >= items.length - 1
      ? []
      : htmlLoadMoreButton('load next conversation', () => {
        loadMessages(store, items[indexOfLastLoadedMessageGroup+1].name)
      })

    return (
      <div style = {{fontFamily: "Helvetica,sans-serif"}}>
        <ul>
          {htmlShowEarlierButton}
          {items.map((messageGroup) => {
            return messageGroup.messages.items.length == 0 
              ? []
              : [htmlMessageGroupHeader(stripExtension(messageGroup.name)), htmlItemsFromMessageGroup(messageGroup, users)]
          })}
          {htmlShowLaterButton}
        </ul>
      </div>
      );
  }
}
Messages.contextTypes = {
  store: React.PropTypes.object
}