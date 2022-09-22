import { Component } from 'react';
import { _success, _info, _warning, _error } from 'react-color-log'; // colorful console.log
import lifecycleMethodsDiagram from '../../assets/images/react-16.4-lifecycle-methods-diagram.png';
import axios from 'axios';

class ExampleMethods extends Component {
  /*
   * method: constructor
   * type: mounting
   * documentation: https://reactjs.org/docs/react-component.html#constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      exampleArray: [],
      persons: [],
    };
    _success('constructor');
  }

  /*
   * method: getDerivedStateFromProps
   * type: mounting
   * documentation: https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
   */
  static getDerivedStateFromProps(props, state) {
    _success('getDerivedStateFromProps');
    console.log('props', props);
    console.log('state', state);
    return null;
  }

  /*
   * method: componentDidMount
   * type: mounting
   * documentation: https://reactjs.org/docs/react-component.html#componentdidmount
   */
  componentDidMount() {
    _success('componentDidMount');

    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ exampleArray: [...this.state.exampleArray, 'setState ran'], persons });
    })

    /*this.setState({
       exampleArray: [...this.state.exampleArray, 'setState ran'],
    });*/
  }

  /*
   * method: getSnapshotBeforeUpdate
   * type: updating
   * documentation: https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    _success('getSnapshotBeforeUpdate');
    return null;
  }

  /*
   * method: componentDidUpdate
   * type: updating
   * documentation: https://reactjs.org/docs/react-component.html#componentdidupdate
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    _success('componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
  }

  /*
   * method: shouldComponentUpdate
   * type: updating
   * documentation: https://reactjs.org/docs/react-component.html#shouldcomponentupdate
   */
  shouldComponentUpdate(nextProps, nextState) {
    _success('shouldComponentUpdate');
    // console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    return true;
  }

  /*
   * method: componentWillUnmount
   * type: unmounting
   * documentation: https://reactjs.org/docs/react-component.html#componentwillunmount
   */
  componentWillUnmount() {
    _success('componentWillUnmount');
  }

  /*
   * method: render
   * type: updating
   * documentation: https://reactjs.org/docs/react-component.html#render
   */
  render() {
    _success('render');
    return (
      <div className="ExampleMethods">
        <h2>Example Methods</h2>
        <img src={lifecycleMethodsDiagram} alt="React Lifecycle Methods" />
        {this.state.exampleArray.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
    );
  }
}

export default ExampleMethods;
