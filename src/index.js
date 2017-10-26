import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import avatar1 from './icons/alien-1.png';
import avatar2 from './icons/alien.png';

let comments = [
    {
        avatar: avatar1,
        name: 'Morgan McCircuit',
        comment: 'Content marked as abusive'
    },
    {
        avatar: avatar2,
        name: 'Bending Bender',
        comment: 'Excellent stuff'
    }
]


ReactDOM.render(<App comments={comments}/>, document.getElementById('root'));
registerServiceWorker();
