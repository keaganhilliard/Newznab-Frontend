// Import React
import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionSettings from 'material-ui/svg-icons/action/settings';

// Create Search component class
class Menu extends React.Component{
	render() {
		return (
			<div>
				<IconButton onTouchTap={this.props.action}><ActionSettings /></IconButton>
			</div>
		);
	}
}

export default Menu


/*
<IconMenu
	iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
	anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	targetOrigin={{horizontal: 'right', vertical: 'top'}}
>
	<MenuItem primaryText="Settings" />
</IconMenu>*/
