// Import React
import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

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
		var size = this.props.item.enclosure['@attributes']['length'] / Math.pow(2, 30);
		var date1 = new Date(this.props.item.pubDate);
		var date2 = new Date();
		var diffDays = this.dateDiffInDays(date1, date2);
		const wordWrap = {
			whiteSpace: 'normal',
			wordWrap: 'break-word'
	  	};
		return(
			<Card
				fluid
				header={this.props.item.title}
				meta={size.toFixed(3) + ' GB'}
				description={"Age: " + diffDays}
				extra={
					<Button
						onClick={() => this.props.handleClick(this.props.item)}
						content="Send to NZBGet"
						color="blue"
						inverted
					/>
				}
			/>
		)
	}
}

export default Result
