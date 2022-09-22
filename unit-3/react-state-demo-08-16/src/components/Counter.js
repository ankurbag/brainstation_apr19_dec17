import React from "react";

class Counter extends React.Component {


    // State
    // Initialize a State
    state = {
        counter: 1
    }
    

    // Functions
    handleClick = () => {
        console.log("Before");
        console.log(this.state);
        // Access State
        let currentCounter = this.state.counter;
        // Modify : setState
        this.setState({counter: currentCounter +1});
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <span>{this.state.counter}</span>
            </div>
        );
    }
}

export default Counter;