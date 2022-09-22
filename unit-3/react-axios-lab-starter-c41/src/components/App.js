import axios from 'axios';
import React, {Component} from 'react';
import CommentList from './CommentList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments : []
        }
    }

    // Make API Calls
    componentDidMount() {
        axios
        .get('https://project-1-api.herokuapp.com/comments?api_key=labKey')
        .then(response => {
            this.setState({comments : response.data})
        })
        .catch();
    }

    incrementLike = (commentId) => {
        console.log('this state', this.state);
        // put comment with id
        axios
        .put(`https://project-1-api.herokuapp.com/comments/${commentId}/like?api_key=labKey`)
        .then(response => {
            console.log('Increment Like API response :');
            console.log(response);
            // Update state here
            // Change comments for the id : commentId
            // this.setState({comments : response.data})
            let updatedData = response.data;
            let currentState = this.state;
            currentState.comments.forEach( (comment, key) => {
                (comment.id === commentId) ? currentState.comments[key] = updatedData : 
                    currentState.comments[key] = comment;
            });
            this.setState({comments: currentState.comments});
        })
        .catch();
    }

    render() {
        console.log('this state2', this.state);
        return (
            <div>
                <h1 className="header">
                    Comments
                </h1>
                <CommentList comments={this.state.comments} incrementLike={this.incrementLike}/>
            </div>
        );
    }
}

export default App;