import React from "react";

class ClassComponent extends React.Component{

  myName = '';
  // Way 1
  /*
  constructor(props) {
    super();
    console.log(props);
    // props
    this.myName = props.name;

    // state
    this.state = {
      myStateName : 'John'
    }
  }
  */
  // Way 2
  state = {
    myStateName : 'John'
  }

  // Functions


  render() {
    return (
      <div >
        <h1>I m in Class Component. Welcome {this.props.name}</h1>
        <h2>THis is coming from State {this.state.myStateName}</h2>
      </div>
    );
  }

}

export default ClassComponent;