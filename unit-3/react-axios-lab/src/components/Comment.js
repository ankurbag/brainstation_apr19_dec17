import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    clickHandler = () => {
        //console.log(props.title, props.content);
        this.props.incrementLike(this.props.id);
    }

    render() {
        const { id, name, comment, likes, incrementLike } = this.props;
        return (
            <div>
              <p>{name}</p>
              <p>{comment}</p>
              <p>Likes :{likes} </p>
              <button onClick={this.clickHandler}>Like</button>
            </div>
        );
    }
}

export default Comment;