import React from 'react';
import TextField from 'material-ui/TextField';

class SettingsField extends React.Component{
	render() {
		return (
			<TextField
				floatingLabelText={this.props.label}
				value={this.props.settings[this.props.fieldName]}
				onChange={(e) => this.props.handleSettings(e, this.props.fieldName)}
				fullWidth={true}
				type={this.props.type}
			/>
		)
	}
}

export default SettingsField
