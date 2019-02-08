import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

// Thunk middleware always pass two arguments dispatch and getState function.
// Using thunk we can return simple action or function!
export const fetchPostsAndUsers = () => async (dispatch, getState )=>{
    await dispatch(fetchPosts());

    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // Equivalent with above statement
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };


export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
};

// MEMOIZE solution for multi server requests !!!!

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data})
// });