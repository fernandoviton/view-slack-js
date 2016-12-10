'use babel'

import React from 'react'
import Channels from '../components/channels'
import addChannelsFromFile from '../util/addChannelsFromFile'
import { remote } from 'electron';
const documentsPath = remote.app.getPath('documents');

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    console.log('store in root component:', store.getState())
    return <div>
      <button
        onClick={() => addChannelsFromFile(store, documentsPath + '/slackexported/channels.json')}>
      Add channels
      </button>
      <Channels
        channels={store.getState().channels}
      />
    </div>;
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
