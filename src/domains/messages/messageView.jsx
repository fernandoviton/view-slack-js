'use babel';

import React from 'react';

export default class MessageView extends React.Component {
  render() {
    const { store } = this.context;
    return (<div />);
    // return (<div>
    //   <div>
    //      <button onClick={() => { store.dispatch(toggleSettingsUi()); }}>...</button>
    //      <Settings />
    //      <Channels />
    //      <Search />
    //   </div>
    //   <div>
    //     <Messages />
    //   </div>
    // </div>);
  }
}
MessageView.contextTypes = {
  store: React.PropTypes.object,
};
