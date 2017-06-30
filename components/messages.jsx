import React, { Component } from 'react';
import loadMessages from '../middleware/loadMessages';
import { findIndexReverse } from '../util/array';
import { stripExtension } from '../util/paths';

const buttonStyle = { textAlignment: 'center', backgroundColor: '#4C9689', color: 'white', fontSize: 14, padding: 10, borderRadius: 5, border: 'none', fontFamily: 'Tahoma, Verdana, Segoe, sans-serif' };

const listStyle = { listStyle: 'none', padding: 10 };

const itemStyle = { padding: 10, borderWidth: 0.1, borderRadius: 0.1, borderColor: '#dddddd' };
const itemStyleSearchResult = { ...itemStyle, backgroundColor: '#dddddd' };

const getDisplayUserName = (users, userId) => {
  const user = users.get(userId);
  return user === undefined ? '???' : user.name;
};

const getDisplayStringFromMessageGroupName = filename =>
  // the filename is in UTC which is probably not useful to present to the user.  Local time
  // might be but then we have to remap messages appropriately too
   stripExtension(filename);

const htmlItemFromMessage = (message, users) => (
    <li
      key={message.id}
      style={message.display.isActiveSearchResult ? itemStyleSearchResult : itemStyle}
    >
      {`${getDisplayUserName(users, message.user)}: ${message.text}`}
    </li>);

const htmlItemsFromMessageGroup = (messageGroup, users) =>
  messageGroup.messages.items.map(message => htmlItemFromMessage(message, users));

const htmlMessageGroupHeader = date => (<p
    style={{ fontSize: 30, color: '#4C9689', fontWeight: 'bold' }}
>
    {date}
  </p>);

const htmlLoadMoreButton = (label, onClick) =>
  <button style={buttonStyle} onClick={onClick}>{label}</button>;

// TODO: there is a bunch of logic that should not be in the view
// for instance showPreviousMessages should be an action and the logic
// should be handled in middleware or reducers
export default class Messages extends Component {
	render() {
    const { store } = this.context;
    const { items } = store.getState().messageGroups;
    const users = store.getState().users.items;

    const indexOfFirstLoadedMessageGroup =
      items.findIndex(messageGroup => messageGroup.messages.items.length > 0);
    const indexOfLastLoadedMessageGroup =
      findIndexReverse(items, messageGroup => messageGroup.messages.items.length > 0);

    const numberOfPreviousToLoad =
      Math.min(indexOfFirstLoadedMessageGroup, Math.max(10, indexOfFirstLoadedMessageGroup / 10));
    const indexOfFirstPreviousToLoad =
      indexOfFirstLoadedMessageGroup - numberOfPreviousToLoad;

    const htmlShowEarlierButton = indexOfFirstLoadedMessageGroup <= 0
      ? []
      : htmlLoadMoreButton('Load previous conversations', () => {
        loadMessages(store,
          items
            .slice(indexOfFirstPreviousToLoad, indexOfFirstLoadedMessageGroup)
            .map(messageGroup => messageGroup.name));
      });
    const htmlShowLaterButton = indexOfLastLoadedMessageGroup >= items.length - 1
      ? []
      : htmlLoadMoreButton('Load next conversations', () => {
        loadMessages(store, items[indexOfLastLoadedMessageGroup + 1].name);
      });

    return (
      <div style={{ fontFamily: 'Tahoma, Verdana, Segoe, sans-serif' }}>
        <ul style={listStyle}>
          {htmlShowEarlierButton}
          {items.map(messageGroup => (messageGroup.messages.items.length === 0
              ? []
              : [htmlMessageGroupHeader(getDisplayStringFromMessageGroupName(messageGroup.name)),
                htmlItemsFromMessageGroup(messageGroup, users)]))}
          {htmlShowLaterButton}
        </ul>
      </div>
      );
  }
}
Messages.contextTypes = {
  store: React.PropTypes.object,
};