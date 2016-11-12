// Import React
import React from 'react';

import {Segment, Search, Grid, Button} from 'semantic-ui-react';
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
				"image": 'http://image.tmdb.org/t/p/w92' + item.poster_path, 
				"key": item.id
			}
		)
	}

	render() {
		return (
			<Segment >
				<Grid>
					<Grid.Row>
						<Grid.Column width={14}>
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
						</Grid.Column>
						<Grid.Column width={2}>
							<Button floated="right" icon="settings" circular onClick={this.props.openSettings}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}

export default SearchBar
