// Import React
import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {debounce} from 'throttle-debounce';

// Create Search component class
class Search extends React.Component{
	createMenuItem(item) {
		return (
			{
				text: item.title,
				value:
					<MenuItem
						primaryText = {item.title}
						secondaryText = {new Date(item.release_date).toLocaleDateString()}
					/>
			}
		)
	}

	render() {
		const style = {
			backgroundColor: `rgb(48, 48, 48)`
		}
		return (
			<AppBar
				title={
					<AutoComplete
						dataSource={
							this.props.items.map(item => this.createMenuItem(item))
						}
						onNewRequest={this.props.handleSelect}
						onUpdateInput={debounce(200, this.props.handleChange)}
						fullWidth={true}
						floatingLabelText={this.props.label}
						filter={AutoComplete.noFilter}
					/>
				}
				iconElementRight={this.props.menu}
				style={style}
				showMenuIconButton={false}
			/>
		);
	}
}

export default Search
