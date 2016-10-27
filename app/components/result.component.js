// Import React
import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

// Player component class
class Result extends React.Component {

	// a and b are javascript Date objects
	dateDiffInDays(a, b) {
		// Discard the time and time-zone information.
		var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours());
		var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours());

		var hours = Math.floor((utc2 - utc1) / (1000 * 60 * 60));
		if (hours >= 24)
			return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24)) + ' Days';
		return hours + ' Hours';
	}

	render() {
		var thumbsUp;
		this.props.item.attr.forEach(
			(attr) => {
				if (attr['@attributes'] && attr['@attributes']['name'] === 'oz_up_votes') {
					thumbsUp =
						<div>
							<br/>
							<i className="material-icons">thumb_up</i>
							{': ' + attr['@attributes']['value']}
						</div>;
				}
			}
		);
		var size = this.props.item.enclosure['@attributes']['length'] / Math.pow(2, 30);
		var date1 = new Date(this.props.item.pubDate);
		var date2 = new Date();
		var diffDays = this.dateDiffInDays(date1, date2);
		const wordWrap = {
			whiteSpace: 'normal',
			wordWrap: 'break-word'
	  	};
		return(
			<Card>
				<CardTitle
					style={wordWrap}
					title={this.props.item.title}
					subtitle={size.toFixed(3) + ' GB'}
				/>
				<CardText>
					Age: {diffDays}
					{thumbsUp}
				</CardText>
				<CardActions>
					<FlatButton
						onTouchTap={() => this.props.handleClick(this.props.item)}
						label="Send to NZBGet"
						primary={true}
					/>
				</CardActions>
			</Card>
		)
	}
}

export default Result
