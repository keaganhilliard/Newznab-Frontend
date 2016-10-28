// Import React
import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Details extends React.Component {
	// Render
	render(){
		return(
			<Card
				fluid
				image={this.props.artwork}
				header={this.props.title} 
				meta={this.props.date}
				description={this.props.description}
				extra={<Button
					inverted
					color='green'
					onClick={this.props.action}
					content="Search Newznab"
				/>}
			/>
		)
	}
}
// Export
export default Details
