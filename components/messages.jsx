import React, { Component, PropTypes } from 'react'
import loadMessages from '../middleware/loadMessages'
import { findIndexReverse } from '../util/array'
import { stripExtension } from '../util/paths'

const buttonStyle = {textAlignment:"center", backgroundColor:"#4C9689", color:"white", fontSize:14, padding:10, borderRadius:5, border:"none", fontFamily: "Tahoma, Verdana, Segoe, sans-serif"}

const listStyle = {listStyle:"none", padding:10}

const itemStyle = {padding:10, borderWidth:.1, borderRadius:.1, borderColor:"#dddddd"}

const getDisplayUserName = (users, userId) => {
  const user = users.get(userId)
  return user === undefined ? "???" : user.name
}

const htmlItemFromMessage = (message, users) => {
  return <li key={message.id} style = {itemStyle}>
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
    style={{fontSize:30, color:"#4C9689", fontWeight:"bold"}}>
    {date}
  </p>
}

const htmlLoadMoreButton = (label, onClick) => {
  return <button style = {buttonStyle} onClick={onClick}>{label}</button>
}

export default class Messages extends Component {
	render() {
    const { store } = this.context;
    const { items } = store.getState().messageGroups;
    const users = store.getState().users.items;

    const indexOfFirstLoadedMessageGroup = items.findIndex((messageGroup) => {
      return messageGroup.messages.items.length > 0
    })
    const indexOfLastLoadedMessageGroup = findIndexReverse(items, (messageGroup) => {
      return messageGroup.messages.items.length > 0
    })

    const numberOfPreviousToLoad = Math.min(indexOfFirstLoadedMessageGroup, Math.max(10, indexOfFirstLoadedMessageGroup/10))
    const numberLeftUntilEndToLoad = items.length - indexOfLastLoadedMessageGroup
    const numberofLaterToLoad = Math.min(numberLeftUntilEndToLoad, Math.max(10, numberLeftUntilEndToLoad/10))

    const htmlShowEarlierButton = indexOfFirstLoadedMessageGroup <= 0
      ? []
      : htmlLoadMoreButton('Load previous conversations', () => {
        loadMessages(store, items.slice(indexOfFirstLoadedMessageGroup-numberOfPreviousToLoad, indexOfFirstLoadedMessageGroup).map((messageGroup) => messageGroup.name))
      })
    const htmlShowLaterButton = indexOfLastLoadedMessageGroup >= items.length - 1
      ? []
      : htmlLoadMoreButton('Load next conversations', () => {
        loadMessages(store, items[indexOfLastLoadedMessageGroup+1].name)
      })

    return (
      <div style = {{fontFamily: "Tahoma, Verdana, Segoe, sans-serif"}}>
        <ul style = {listStyle}>
          {htmlShowEarlierButton}
          {items.map((messageGroup) => {
            return messageGroup.messages.items.length == 0 
              ? []
              : [htmlMessageGroupHeader(getDisplayStringFromMessageGroupName(messageGroup.name)), htmlItemsFromMessageGroup(messageGroup, users)]
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

const getDisplayStringFromMessageGroupName = (filename) => {
  // the filename is in UTC which is probably not useful to present to the user.  Local time 
  // might be but then we have to remap messages appropriately too
  return stripExtension(filename)
}