import React, { Component } from 'react';
import Menu from './Menu';
import Clock from './Clock';
import HooksDemo from './HooksDemo';

class App extends Component {
  state = {
    name: "App",
    menuOpen: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log(`App called getDerivedStateFromProps()`);
    console.log(` passed props: ${JSON.stringify(props)}, state: ${JSON.stringify(state)}`)
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`App called getSnapshotBeforeUpdate()`);
    console.log(` passed prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}`);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`App called shouldComponentUpdate()`);
    console.log(` passed nextProps: ${JSON.stringify(nextProps)}, nextState: ${JSON.stringify(nextState)}`);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`App called componentDidMount()`);
    console.log(` passed prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}, snapshot: ${JSON.stringify(snapshot)}`);
  }

  componentDidMount() {
    console.log(`App called componentDidMount()`);
  }

  componentWillUnmount() {
    console.log(`App called componentWillUnmount()`);
  }

  toggleMenu = () => {
    this.setState((prevState) => {
        return {
            name: prevState.name,
            menuOpen: !prevState.menuOpen
        }
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="header">
            Welcome to BrainStation
        </h1>

        <button onClick={this.toggleMenu}>Toggle Menu</button>
        {/* this.state.menuOpen && <Clock/>*/}
        {/*this.state.menuOpen && <Menu/>*/}
        {this.state.menuOpen && <HooksDemo/>}
    </div>
    );
  }
}

export default App;
