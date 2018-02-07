import React, { Component } from 'react';
import { setActiveSearch, doSearch, doSearchNow } from '../actions/index';

const inputStyle = { width: '100%' };

export default class Search extends Component {
  render() {
		const { store } = this.context;
		const { activeSearch } = store.getState();
		const searchResultsSummary = activeSearch && activeSearch.searchText && activeSearch.searchHitCount !== undefined
			? `(found ${activeSearch.searchHitCount} results)`
			: '';

		return (
				<div>
					<br/>
					<label>{`Search ${searchResultsSummary}`}</label>
					<input
						type="text"
						style={inputStyle}
						value={activeSearch.searchText}
						onChange={(event) => {
							store.dispatch(setActiveSearch(event.target.value)); 
							store.dispatch(doSearch()); 
						}}
						onKeyPress={(event) => {
							if (event.which === 13) {
								store.dispatch(setActiveSearch(event.target.value)); 
								store.dispatch(doSearchNow()); 
								}
							}
						}
						onBlur={(event) => {
							store.dispatch(doSearchNow()); }}
					/>
				</div>
			);
	}
}
Search.contextTypes = {
	store: React.PropTypes.object,
};
// Search.propTypes = {
//  channels: PropTypes.array.isRequired
// }