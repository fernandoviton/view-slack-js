'use babel'

import React from 'react'
import Channels from '../components/channels'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    console.log('store on Root render:', store.getState())
    return <div>
      <Channels
        channels={store.getState().channels}
      />
    </div>;
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
