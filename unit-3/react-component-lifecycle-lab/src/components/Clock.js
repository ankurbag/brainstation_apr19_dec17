import React, {Component} from 'react';

class Clock extends Component {
    state = {
      date: new Date()
    };

  // your code here
 
  tick = () => {
    console.log('tick!');
    this.setState({
      date: new Date()
    });
  }

  componentDidUpdate() {
    console.log(`Clock called componentDidUpdate()`);
   
    
  }

  componentDidMount() {
    console.log(`Clock called componentDidMount()`);
     
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`Clock called componentDidUpdate()`);
    console.log(` passed prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}, snapshot: ${JSON.stringify(snapshot)}`);
 
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Clock called shouldComponentUpdate()`);
    console.log(` passed nextProps: ${JSON.stringify(nextProps)}, nextState: ${JSON.stringify(nextState)}`);
    if(isEvenSeconds(nextState.date))
      return true;
    return false;
  }

  

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        { /*<h2>It is { isEvenSeconds(this.state.date) && this.state.date.toLocaleTimeString() }.</h2>*/}
        <h2>It is {this.state.date.toLocaleTimeString() }.</h2>
      </div>
    );
  }
}

/** Returns true if the number of seconds is even */
function isEvenSeconds(date) {

  
  let flag = date.getSeconds() % 2 === 0;
  console.log("Ankur :: ", date, flag);
  return flag;
}

export default Clock;