import React, { Component, PropTypes } from 'react'
import { setArchiveDisplayPath, loadArchive } from '../actions/index'
import Dropbox from 'Dropbox'


const divStyle = {padding:10}
const inputStyle = {width:"100%"}
const errorStyle = {width:"100%", fontStyle: "italic", color:"red", margin:2, padding:0}


export default class Settings extends Component {
  render() {
		const { store } = this.context
		const { settings } = store.getState()
		const { archive } = store.getState()

		return (
			<div hidden={settings.hiddenUi} style={divStyle}>
				<button onClick={onChooseFromDropboxClick}>Choose from Dropbox</button>
				<input
				 	type="url"
					style={inputStyle}
					value={archive.displayPath}
					onChange={(event)=>{store.dispatch(setArchiveDisplayPath(event.target.value))}}
				 	onKeyPress={(event)=>{ if (event.which === 13) store.dispatch(loadArchive(event.target.value)) }}
					onBlur={(event)=>{ store.dispatch(loadArchive(event.target.value)) }}
				/>
				<p hidden={settings.loadArchiveErrorMsg === undefined} style={errorStyle}>
					{settings.loadArchiveErrorMsg}
				</p>
			</div>
			)
	}
}
Settings.contextTypes = {
  store: React.PropTypes.object
}

const onChooseFromDropboxClick = () => {
	const options = {
		success: (files) => {
			alert("Here's the file link: " + files[0].link)
		}
	}

	Dropbox.choose
}

