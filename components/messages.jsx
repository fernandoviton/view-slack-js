import React, { Component, PropTypes } from 'react'
import MessageGroups from './messageGroups'
import loadMessages from '../middleware/loadMessages'
import {findIndexReverse} from '../util/array'

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
  return <p><font color="red">{date}</font></p>
}

const htmlLoadMoreButton = (label, onClick) => {
  return <button onClick={onClick}>{label}</button>
}

export default class Messages extends Component {
	render() {
    const { store } = this.context;
    const { items } = store.getState().messageGroups;

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
      <div>
        <ul>
          {htmlShowEarlierButton}
          {items.map((messageGroup) => {
            return messageGroup.messages.items.length == 0 
              ? []
              : [htmlMessageGroupHeader(messageGroup.name), htmlItemsFromMessageGroup(messageGroup)]
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