import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './views/App';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

