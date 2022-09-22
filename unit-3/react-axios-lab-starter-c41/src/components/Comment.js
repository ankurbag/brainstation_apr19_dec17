import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    clickHandler = () => {
        // Increment the like by 1
        console.log('I clicked Like Button!', this.props.commentId);
        this.props.incrementLike(this.props.commentId);
    }

    render() {
        const { name, comment, likes} = this.props;
        return (
            <div>
              <p>{name}</p>
              <p>{comment}</p>
              <p>Likes : {likes}</p>
              <button onClick={this.clickHandler}>Like</button>
            </div>
        );
    }
}

export default Comment;