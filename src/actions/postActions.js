import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res);
            dispatch({
                type: FETCH_POSTS,
                payload: res.data
            })
        })
        .catch( err => {
            console.log(err);
        })
}

export const createPost = newPost => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'content-type': 'application/json'
            },
            body: newPost
        })
        .then( post => dispatch({
            type: NEW_POST,
            payload: [post.data.body]
        }))
        .catch( err => {
            console.log(err);
        })
}