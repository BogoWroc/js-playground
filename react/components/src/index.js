import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 3:00PM"
                avatar={faker.image.avatar()}
                content="Nice blog post!"/>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 6:00PM"
                avatar={faker.image.avatar()}
                content="Nice blog post!"/>
            <CommentDetail
                author="Jane"
                timeAgo="Today at 4:00PM"
                avatar={faker.image.avatar()}
                content="Nice blog post!"/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));