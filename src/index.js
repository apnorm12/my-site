import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from'./Test';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));


serviceWorker.unregister();


