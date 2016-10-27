// Import React
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// Player component class
class NzbSearch extends React.Component {
	render(){
		return(
			<RaisedButton
				onTouchTap={this.props.handleClick}
				label="Search Newznab"
			/>
		)
	}
}

export default NzbSearch
