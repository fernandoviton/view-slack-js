import React, { Component } from 'react';
import { setActiveSearch, doSearch } from '../actions/index';

const inputStyle = { width: '100%' };

export default class Search extends Component {
  render() {
		const { store } = this.context;
		const { activeSearch } = store.getState();

		return (
				<input
					type="text"
					style={inputStyle}
					value={activeSearch.searchText}
					onChange={(event) => { store.dispatch(setActiveSearch(event.target.value)); }}
					onKeyPress={(event) => {
						if (event.which === 13) {
							store.dispatch(doSearch());
							}
						}
					}
					onBlur={(event) => { store.dispatch(doSearch()); }}
				/>
			);
	}
}
Search.contextTypes = {
	store: React.PropTypes.object,
};
// Search.propTypes = {
//  channels: PropTypes.array.isRequired
// }