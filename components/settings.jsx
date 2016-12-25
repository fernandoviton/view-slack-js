import React, { Component, PropTypes } from 'react'
import Creatable from 'react-select'

export default class Channels extends Component {
  render() {
		const { store } = this.context;
		const options = []
		const currentOption = ''
		const onChange = (selectedOption) => {
			console.log("onchange")
		}

    return (
			<div>
			<button>...</button>
			<Creatable
				onNewOptionClick={()=>{console.log("onNewOptionClick")}}
				newOptionCreator={(label, labelKey, valueKey) => console.log("newOptionCreator")}
				name="archivePath"
				value={currentOption}
				onChange={onChange}
				options={options}
				placeholder='Select an archive'/>			
			</div>
      )
  }
}
Channels.contextTypes = {
  store: React.PropTypes.object
}
//Channels.propTypes = {
//  channels: PropTypes.array.isRequired
//}