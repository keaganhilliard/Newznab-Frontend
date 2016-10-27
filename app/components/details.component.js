// Import React
import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Details extends React.Component {
	// Render
	render(){
		return(
			<Card>
				<CardMedia overlay={<CardTitle title={this.props.title} subtitle={this.props.date} />}>
      				<img src={this.props.artwork} />
    			</CardMedia>
				<CardText>
					{this.props.description}
				</CardText>
				<CardActions>
					{this.props.action}
				</CardActions>
			</Card>
		)
	}
}
// Export
export default Details
