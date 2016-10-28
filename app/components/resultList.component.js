// Import React
import React from 'react';
import Result from './result.component';

// Player component class
class ResultList extends React.Component {
	render() {
		var handleRowClick = this.props.handleRowClick;
		console.log(this.props.items)
		return(
			<div>
				{this.props.items.map((i) => {
					return (
						<Result
							handleClick={handleRowClick}
							item={i}
							key={i.guid}
						/>
					);
				})}
			</div>
		)
	}
}

export default ResultList
