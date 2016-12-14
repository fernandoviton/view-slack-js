'use babel'

import React from 'react'
import Channels from './channels'
import MessageGroups from './messageGroups'
import Conversation from './conversation'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    console.log('store on Root render:', store.getState())
    return <div>
      <div>
        <Channels
          channels={store.getState().channels}
        />
      </div>
      <div>
        <MessageGroups
          messageGroups={store.getState().messageGroups}
        />
      </div>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
