// Import React
import React from 'react';
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'

class Details extends React.Component {
	// Render
	render(){
		return(
			<Card
				fluid
				image={this.props.artwork}
				header={this.props.title} 
				meta={
					<div>
						{this.props.date} <br/>
						<Rating maxRating={5} rating={Math.round(this.props.rating/2)} icon='star' disabled /> {this.props.rating/2}/5
					</div>
				}
				description={this.props.description}
				extra={
					<Button
						color='green'
						onClick={this.props.action}
						content="Search Newznab"
					/>
				}
			/>
		)
	}
}
// Export
export default Details
