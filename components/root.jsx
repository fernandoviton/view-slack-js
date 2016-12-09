'use babel'

import React from 'react'
import Conversation from '../components/conversation'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    console.log('store in root component:', store.getState())
    return <div>
      <button
        onClick={() => store.dispatch({ type: 'ADD_CONVERSATION_ITEM' })}>
      Add text
      </button>
      <Conversation
        items={store.getState().conversation}
      />
    </div>;
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
