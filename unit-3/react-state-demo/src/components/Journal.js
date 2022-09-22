import { Component } from 'react';
import JournalEntry from './JournalEntry/JournalEntry';

class Journal extends Component {
    state = {
        entries: [
            { id: 1, title: 'My favourite linguine', likes: 50 },
            { id: 2, title: 'How I became a squirrel', likes: 27 },
            { id: 3, title: 'Fun with React State!', likes: 1 },
        ]
    };

    handleAdd = () => {
        // 1. Make a new entry object
        const newEntry = { id: Date.now(), title: 'Infinite loops: a personal guide', likes: 10 };

        // 2. Concat our array with our new entry
        const newEntries = this.state.entries.concat(newEntry);
        
        // 3. Set a new array into our state
        this.setState({
            entries: newEntries
        });
    };

    handleLike = (entryId) => {
        // Increase the likes for this specific entry by 1

        // const newEntries = this.state.entries.slice();
        // const entryToLike = newEntries.find((entry) => entry.id === entryId);
        // entryToLike.likes++;
        // ^ or do it with map/object.assign/spread, because the above is technically mutating

        const newEntries = this.state.entries.map((entry) => {
            if (entry.id === entryId) {
                return {
                    id: entry.id,
                    title: entry.title,
                    likes: entry.likes + 1
                }
            }

            return entry;
        });

        this.setState({
            entries: newEntries
        });
    };

    handleDelete = (id) => {

    };

    handleSort = () => {

    };

    render() {
        return (
            <div>
                <h2>Journal</h2>

                {this.state.entries.map((entry) => (
                    <JournalEntry
                        key={entry.id}
                        entry={entry}
                        onLike={this.handleLike}
                    />
                ))}

                <button onClick={this.handleAdd}>
                    Add Entry
                </button>
            </div>
        );
    }
}

export default Journal;