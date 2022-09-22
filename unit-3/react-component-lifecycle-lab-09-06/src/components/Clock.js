import React, {Component} from 'react';

class Clock extends Component {
    state = {
      date: new Date()
    };

  // your code here
  // componentDidMount() is invoked immediately 
  // after a component is mounted (inserted into the tree).
  // And I want to call the tick method imediately after the Clock
  // component is loaded
  componentDidMount() {
    // setInterval example
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);
  }

  // This method will delete the timerID which has been created while 
  // mounting the component
  componentWillUnmount() {
    // clearInterval example
    clearInterval(this.timerID);
  }

  tick = () => {
    console.log('tick!');
    this.setState({
      date: new Date()
    });
  }

  render() {
    
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* For conditional rendering, we should check in the render method*/}
        <h2>It is { isEvenSeconds(this.state.date) && this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

/** Returns true if the number of seconds is even */
function isEvenSeconds(date) {
  console.log(date);
  return date.getSeconds() % 2 === 0;
}

export default Clock;