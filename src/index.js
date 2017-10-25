import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let comments = [
    {
        name: 'Morgan McCircuit',
        comment: 'Content marked as abusive'
    },
    {
        name: 'Bending Bender',
        comment: 'Excellent stuff'
    }
]


ReactDOM.render(<App comments={comments}/>, document.getElementById('root'));
registerServiceWorker();
