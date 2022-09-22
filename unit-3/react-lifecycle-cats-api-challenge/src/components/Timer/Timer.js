import { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
  state = {
    time: 0,
  };

  componentDidMount() {
    // console.log('Timer Component Mounted');
    this.incrementTime(); // start timer
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('Timer Component Updated');
    // console.log(prevProps); // previous props if any
    // console.log('prevState', prevState); // old state, previous state
    // console.log('current state', this.state); // updated state
  }

  componentWillUnmount() {
    console.log('Timer Component UnMounted');
    clearInterval(this.timer); // remove created timer setInterval when component removed/unMounted
  }

  // method to update state every second, updating state causes a re-render 💡
  incrementTime = () => {
    // attach timer to instance variable this.timer, in order to remove when unMounting
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  };

  // render method which runs many times! Every time this.setState() the render method is called
  render() {
    console.log('Timer Component Rendered');
    return (
      <div className="Timer">
        <h2 className="Timer__title">Timer</h2>
        <p className="Timer__time">Time: {this.state.time} </p>
      </div>
    );
  }
}

export default Timer;
