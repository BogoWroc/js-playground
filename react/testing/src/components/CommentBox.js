import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchComments, saveComment, typeComment} from 'actions';

class CommentBox extends Component {

    handleChange = event => {
        this.props.typeComment(event.target.value);
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.props.textValue);
        this.props.typeComment('');
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.props.textValue}></textarea>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>

                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {textValue: state.commentBox}
};

export default connect(mapStateToProps, {saveComment, fetchComments, typeComment})(CommentBox);