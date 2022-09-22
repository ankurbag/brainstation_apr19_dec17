import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  
    render() {
        return (
            <div>{
              this.props.comments.map(comment => {
                return <Comment name={comment.name} 
                        comment={comment.comment}  
                        likes={comment.likes}
                        commentId={comment.id}
                        incrementLike={this.props.incrementLike}
                        />
              })
            }</div>
        );
    }
}

export default CommentList;