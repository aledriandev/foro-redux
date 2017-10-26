import createStore from "redux-zero";

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

const initialState = {
    comments: comments,
};

const store = createStore(initialState);

export default store;