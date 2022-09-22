import { Component } from 'react';
import Tea from '../Tea';
import TeaList from '../TeaList';
import axios from 'axios';
import './TeaPage.scss';

class TeaPage extends Component {
  state = {
    tea: null,
    teas: [],
  };

  componentDidMount() {
    axios
      .get(`https://tea-api-vic-lo.herokuapp.com/tea`)
      .then((response) => {
        // update state with data from api
        this.setState({
          teas: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    // if react router id param exists
    if (this.props.match.params.id) {
      // find tea in array
      const tea = this.state.teas.find((tea) => {
        return tea._id === this.props.match.params.id;
      });
      // if previous state tea is not null
      if (prevState.tea === null) {
        this.setState({
          tea,
        });
      }
      // prevent infinite loop by checking that previous state tea is not tea._id
      else if (prevState.tea._id !== tea._id) {
        this.setState({
          tea,
        });
      }
    }
    // else set tea back to null
    else if (prevState.tea !== null) {
      this.setState({
        tea: null,
      });
    }
  }

  render() {
    return (
      <div className="TeaPage">
        {this.state.tea && (
          <Tea
            name={this.state.tea.name}
            image={this.state.tea.image}
            description={this.state.tea.description}
          />
        )}
        <TeaList teas={this.state.teas} />
      </div>
    );
  }
}

export default TeaPage;
