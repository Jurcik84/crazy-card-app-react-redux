import React from 'react';
import ReactDOM from 'react-dom';

// Redux Provider
import { Provider } from 'react-redux';
import store from './store';

import 'antd/dist/antd.css'; 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
