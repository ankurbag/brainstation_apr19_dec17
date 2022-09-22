import React, {Component} from 'react';
import CommentList from './CommentList';
import axios from 'axios';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments : [],
            id : ''
        };
    }

    incrementLike = (commentId) => {
        console.log("Hello", commentId);
        axios
            .put(`https://project-1-api.herokuapp.com/comments/${commentId}/like?api_key=labKey`)
            .then(response => {
                console.log(response);
                this.setState({id:  commentId});
                console.log(this.state);
            })
            .then();
    }

    componentDidMount() {
        axios
        .get('https://project-1-api.herokuapp.com/comments?api_key=labKey')
        .then(response => {
            console.log(response);
            this.setState({comments :response.data })
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        /*if(prevState)
        axios
        .get('https://project-1-api.herokuapp.com/comments?api_key=labKey')
        .then(response => {
            console.log(response);
            //this.setState({comments :response.data })
        });*/
      }

    render() {
        return (
            <div>
                <h1 className="header">
                    Comments {this.state.id}
                </h1>
                <CommentList incrementLike={this.incrementLike} comments={this.state.comments} />
            </div>
        );
    }
}

export default App;