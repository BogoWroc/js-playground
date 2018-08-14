import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import SayHello from './components/SayHello'
import registerServiceWorker from './registerServiceWorker';

var root = (
    <div>
        <App title="Yo React APP!!!"/>
        <SayHello/>
    </div>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
