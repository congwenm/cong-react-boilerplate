// css libs
import 'normalize.css'
import 'flexboxgrid'
import 'basscss/css/basscss.css';

// material
import theme from './themes/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// lib react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<MuiThemeProvider muiTheme={theme}>
		<App />
	</MuiThemeProvider>, 
	document.getElementById('root')
);
registerServiceWorker();
