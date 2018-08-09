import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SayHello from './SayHello'
import registerServiceWorker from './registerServiceWorker';

var root = (
    <div>
        <App />
        <SayHello/>
    </div>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
