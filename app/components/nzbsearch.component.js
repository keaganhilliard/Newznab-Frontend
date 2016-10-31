// Import React
import React from 'react';
import Button from 'semantic-ui-react';
class NzbSearch extends React.Component {
	render(){
		return(
			<Button
				color='green'
				onClick={this.props.handleClick}
				content="Search Newznab"
			/>
		)
	}
}

export default NzbSearch
