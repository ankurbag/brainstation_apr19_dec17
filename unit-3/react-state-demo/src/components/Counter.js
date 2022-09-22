import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count);
        // });
    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                {this.state.count}
                <button onClick={this.handleClick}>
                    Increase counter
                </button>
            </div>
        );
    }
}

export default Counter;
