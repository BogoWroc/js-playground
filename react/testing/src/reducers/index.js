import {combineReducers} from 'redux';
import commentsReducer from 'reducers/comments';
import commentBoxReducer from 'reducers/commentBox';

export default combineReducers({
    comments: commentsReducer,
    commentBox: commentBoxReducer
});