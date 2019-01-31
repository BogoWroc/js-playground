import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 3:00PM"
                    avatar={faker.image.avatar()}
                    content="Nice blog post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 6:00PM"
                    avatar={faker.image.avatar()}
                    content="Nice blog post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 4:00PM"
                    avatar={faker.image.avatar()}
                    content="Nice blog post!"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));