'use babel'

import React from 'react'
import Counter from '../components/counter'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    console.log('store in root component:', store.getState())
    return <div>Hello from Redux-y React ES6 :)
      <Counter
        value={store.getState().counter}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>
      <p>
      {'This is your secret message.      And your really secret message'.substring(0, store.getState().counter)}
      </p>
    </div>;
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
