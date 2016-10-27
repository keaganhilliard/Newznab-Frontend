// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import AppContainer from './containers/app.container';

// Search component created as a class
class App extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<AppContainer />
			</MuiThemeProvider>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( <App /> ,
    document.getElementById('content')
);
