import React from 'react';
import Dialog from 'material-ui/Dialog';
import SettingsField from './settingsField.component'

class Settings extends React.Component{
	render() {
		var _this = this;
		return (
			<div>
				<Dialog
					title="Settings"
					actions={this.props.actions}
					open={this.props.open}
					modal={true}
				>
					<SettingsField
						label="TMDB API Key"
						settings={this.props.settings}
						handleSettings={this.props.handleSettings}
						fieldName="tmdb_api_key"
					/>
					<br />
					<SettingsField
						label="Newznab API Endpoint"
						settings={this.props.settings}
						handleSettings={this.props.handleSettings}
						fieldName="newznab_endpoint"
					/>
					<br />
					<SettingsField
						label="Newznab API Key"
						settings={this.props.settings}
						handleSettings={this.props.handleSettings}
						fieldName="newznab_api_key"
					/>
					<br />
					<SettingsField
						label="NZBGet Host"
						settings={this.props.settings}
						handleSettings={this.props.handleSettings}
						fieldName="nzbget_host"
					/>
					<br />
					<SettingsField
						label="NZBGet Port"
						settings={this.props.settings}
						handleSettings={this.props.handleSettings}
						fieldName="nzbget_port"
					/>
					<br />
					<SettingsField
						label="NZBGet Username"
						settings={this.props.settings}
						handleSettings={this.props.handleSettings}
						fieldName="nzbget_user"
					/>
					<br />
					<SettingsField
						label="NZBGet Password"
						settings={this.props.settings}
						handleSettings={this.props.handleSettings}
						fieldName="nzbget_password"
						type="password"
					/>
				</Dialog>
			</div>
		);
	}
}

export default Settings
