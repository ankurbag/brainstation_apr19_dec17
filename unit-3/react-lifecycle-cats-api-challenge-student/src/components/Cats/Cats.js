import { Component } from "react";
import "./Cats.scss";
import axios from "axios";
import Cat from "./Cat";

class Cats extends Component {
  state = {
    cats: [],
  };
  
  // TODO
  // Introduce Lifecycle method, and make API Call here
  componentDidMount() {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
    .then( res => {
      this.setState({cats : res.data})
    })
  }

  render() {
    console.log(this.state);
    return (
      <main>
        {this.state.cats.map((cat) => (
          <Cat key={cat.id} url={cat.url} />
        ))}
      </main>
    );
  }
}

export default Cats;
