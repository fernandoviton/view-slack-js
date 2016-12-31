'use babel'

import React from 'react'
import Channels from './channels'
import Messages from './messages'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    console.log('store on Root render:', store.getState())
    return <div>
      <div>
        <Channels/>
      </div>
      <div>
        <Messages/>
      </div>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
