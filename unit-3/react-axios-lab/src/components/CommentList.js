
import React, {Component} from 'react';
import Comment from './Comment';
import axios from 'axios';

class CommentList extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      comment : this.props.comments
    }
  }

  
  
  render() {
    
        return (
            <div>{
              this.props.comments.map( (comment,key) => {
                return <Comment id={comment.id} name={comment.name} comment={comment.comment} likes={comment.likes} incrementLike={this.props.incrementLike} />
              })
            }</div>
        );
    }
}

export default CommentList;