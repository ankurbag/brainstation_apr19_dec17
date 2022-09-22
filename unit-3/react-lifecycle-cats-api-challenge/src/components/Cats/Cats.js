import { Component } from "react";
import "./Cats.scss";
import axios from 'axios';
import Cat from "./Cat";

class Cats extends Component {
  state = {
    cats: [],
  };

  componentDidMount() {
    console.log("componentDidMount");
    // add userData, similar to setting after axios api call
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
    .then(res => {
      const catsData = res.data;
      this.setState({ cats : catsData });
    });
    console.log(this.state);
    /*this.setState({
      cats: userData,
    });*/

    /*if (this.props.match.params.id) {
      console.log(`id: ${this.props.match.params.id}`);
      this.setState({ currentUser: this.props.match.params.id });
    }*/
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log(this.state);
    return (
      <main>
        {this.state.cats.map( (cat) => ( <Cat key={cat.id} url={cat.url} />)  )}
      </main>
    );
  }
}

export default Cats;
