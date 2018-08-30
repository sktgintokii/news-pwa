import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './globalStyles';
import 'sanitize.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
