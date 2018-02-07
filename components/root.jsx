'use babel';

import React from 'react';
import Settings from './settings';
import Channels from './channels';
import Messages from './messages';
import Search from './search';
import { toggleSettingsUi } from '../actions/index';

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
   //console.log('store on Root render:', store.getState());
    return (<div>
      <div>
         <button onClick={() => { store.dispatch(toggleSettingsUi()); }}>...</button>
         <Settings />
         <Channels />
      </div>
      <div>
        <Search />
        <Messages />
      </div>
    </div>);
  }
}
Root.contextTypes = {
  store: React.PropTypes.object,
};
