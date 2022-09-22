import React from "react";
import  axios from "axios";
class HomePage extends React.Component{
  
  // Stage : 1 Mounting
  constructor(props) {
    super(props);
    this.state = {
      exampleArray: []
    }
    console.log("**** Constructor *****");
  }

  // Render is a shared method
  // Stage 2 / 1
  render() {
    console.log("**** Render *****");
    console.log(this.state);
   
    return (
      <>
        <h1>Home</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
          repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
          eaque?
        </p>
      </>
    );
  }

  componentDidMount() {
    console.log("**** componentDidMount *****");
    // Typical use case for 
    // api https://jsonplaceholder.typicode.com/users
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then( res => {
      this.setState( {exampleArray : [...this.state.exampleArray, res.data]});
    });
    
    // this.setState( {exampleArray : [...this.state.exampleArray, 'Some new data']});
  }

  // Stage 2
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("**** componentDidUpdate *****");
    console.log(prevProps);
    console.log(prevState);
    console.log(snapShot);
    // Do some filtered rendering
  }

  // Stage 3
  componentWillUnmount(){
    console.log("**** componentWillUnmount *****");
  }
  
}

export default HomePage;
