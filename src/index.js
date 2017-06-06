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

// redux
import { Provider } from 'react-redux'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './stores/index'

ReactDOM.render(
	<MuiThemeProvider muiTheme={theme}>
    <Provider store={store()}>
		  <App />
    </Provider>
	</MuiThemeProvider>, 
	document.getElementById('root')
);
registerServiceWorker();
