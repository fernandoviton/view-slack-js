import React, { Component, PropTypes } from 'react'
import Creatable from 'react-select'

export default class Settings extends Component {
  render() {
		const { store } = this.context
		const { settings } = store.getState()

    return (
			<div>
       	<input 
				 	type="url" 
				 	onKeyPress={(event)=>{ if (event.which === 13) console.log(event.which) }}
					hidden={settings.hiddenUi}
				/>
			</div>
      )
  }
}
Settings.contextTypes = {
  store: React.PropTypes.object
}