import './JournalEntry.scss';
import { Component } from "react";

class JournalEntry extends Component {
    state = {
        hasUserLiked: false
    };

    handleClick = () => {
        this.props.onLike(this.props.entry.id)
        this.setState({
            hasUserLiked: true
        });
    };

    render() {
        return (
            <article className="journal-entry">
                <h3 className="journal-entry__title">{this.props.entry.title}</h3>
                <span>Likes: {this.props.entry.likes}</span>
                <button
                    className="journal-entry__btn"
                    onClick={this.handleClick}
                    disabled={this.state.hasUserLiked}
                >
                    Like
                </button>
            </article>
        );
    }
}

export default JournalEntry;
