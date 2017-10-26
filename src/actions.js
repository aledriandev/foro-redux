import store from "./store";
import avatar1 from './icons/alien-1.png';


export const deleteComment = (index) => {
    const commentList =  store.getState().comments.filter( (comment, idx) => idx != index );
    
    store.setState({
        comments: commentList
    })
}

export const addComment = (name,comment) => {
    const addComentUser = [...store.getState().comments,   {
		avatar : avatar1,
		name: name,
		comment: comment,
    }];
    store.setState({
		comments: addComentUser,
	})
}