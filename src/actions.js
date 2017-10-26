import store from "./store";


export const deleteComment = (index) => {
    const commentList =  store.getState().comments.filter( (comment, idx) => idx != index );
    
    store.setState({
        comments: commentList
    })
}
