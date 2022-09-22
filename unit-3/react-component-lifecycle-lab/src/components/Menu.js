import React, { Component } from 'react';

class Menu extends Component {
    state = {
        name: "Menu"
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`Menu called getSnapshotBeforeUpdate()`);
        return null;
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`Menu called getDerivedStateFromProps()`);
        console.log(` passed props: ${JSON.stringify(props)}, state: ${JSON.stringify(state)}`)
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`Menu called shouldComponentUpdate()`);
        console.log(` passed nextProps: ${JSON.stringify(nextProps)}, nextState: ${JSON.stringify(nextState)}`);
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // react to changes in state
        console.log(`Menu called componentDidMount()`);
        console.log(` passed prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}, snapshot: ${JSON.stringify(snapshot)}`);
    }

    componentDidMount() {
        // get data from server
        console.log(`Menu called componentDidMount()`);
    }

    componentWillUnmount() {
        // d
        console.log(`Menu called componentWillUnmount()`);
    }

    render() {
        console.log(`Menu called render`);
        return (
            <ul className="menu">
                <li>Home</li>
                <li>About</li>
            </ul>
        );
    }
}

export default Menu;