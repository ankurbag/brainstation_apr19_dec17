import { Component } from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";

class App extends Component {
  
  render() {
    return (
      <>
        <Header title="Appointment Form" />
        <MainComponent />
      </>
    );
  }
}

export default App;
