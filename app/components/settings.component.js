import React, {Component} from 'react';
import SettingsField from './settingsField.component';
import { Button, Modal, Icon } from 'semantic-ui-react';

class Settings extends Component{
	render() {
		return (
			<div>
				<Modal
					title="Settings"
					open={this.props.open}
					onClose={this.props.handleCloseSettings}
					dimmer="blurring"
				>
					<Modal.Header>Settings</Modal.Header>
					<Modal.Content>
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
					</Modal.Content>
					<Modal.Actions>
						<Button.Group>
							<Button negative onClick={this.props.handleCloseSettings}>
								Cancel
							</Button>
							<Button.Or/>
							<Button positive icon labelPosition='right' onClick={this.props.handleSaveSettings}>
								Save <Icon name='checkmark' />
							</Button>
						</Button.Group>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default Settings
