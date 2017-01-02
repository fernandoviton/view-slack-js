import React, { Component, PropTypes } from 'react'
import loadArchive from '../middleware/loadArchive'
import { setArchiveDisplayPath } from '../actions/index'

const inputStyle = {width:"100%"}


export default class Settings extends Component {
  render() {
		const { store } = this.context
		const { settings } = store.getState()
		const { archive } = store.getState()

    return (
			<div>
       	<input 
				 	type="url"
					style={inputStyle}
					value={archive.displayPath}
					onChange={(event)=>{store.dispatch(setArchiveDisplayPath(event.target.value))}}
				 	onKeyPress={(event)=>{ if (event.which === 13) loadArchive(store, event.target.value) }}
					onBlur={(event)=>{loadArchive(store, event.target.value)}}
					hidden={settings.hiddenUi}
				>
				</input>
			</div>
      )
  }
}
Settings.contextTypes = {
  store: React.PropTypes.object
}