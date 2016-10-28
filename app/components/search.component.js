// Import React
import React from 'react';

import {Header, Segment, Search, Rail, Button} from 'semantic-ui-react';
import {debounce} from 'throttle-debounce';

// Create Search component class
class SearchBar extends React.Component{
	createSearchResult(item) {
		console.log(item);
		return (
			{
				"title": item.title,
				"description": new Date(item.release_date).toLocaleDateString(),
				"id": item.id, 
				"image": 'http://image.tmdb.org/t/p/w92' + item.poster_path
			}
		)
	}

	render() {
		return (
			<div>
				<Rail attached internal position='left'>
					<Segment >
						<Search
							fluid
							results={
								this.props.items.map(item => this.createSearchResult(item))
							}
							onChange={this.props.handleSelect}
							onSearchChange={debounce(200, this.props.handleChange)}
							placeholder={this.props.label}
							loading={this.props.loading}
						/>
					</Segment>
				</Rail>
				<Rail attached internal position='right'>
					<Segment >
						<Button floated="right"  circular icon="settings" onClick={this.props.openSettings}/>
					</Segment>
				</Rail>
			</div>
		);
	}
}

export default SearchBar
