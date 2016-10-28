import React from 'react';
import {Input} from 'semantic-ui-react'
class SettingsField extends React.Component{
	render() {
		var type = 'text'
		if (this.props.type) type = this.props.type;
		return (
			<Input
				fluid
				label={this.props.label}
				value={this.props.settings[this.props.fieldName]}
				onChange={(e) => this.props.handleSettings(e, this.props.fieldName)}
				type={type} 
			/>
		)
	}
}

export default SettingsField
