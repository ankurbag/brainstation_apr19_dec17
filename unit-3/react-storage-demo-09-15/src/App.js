import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Cookies from "js-cookie";

class App extends React.Component {
  state = {
    localStorageCnt: 0,
    sessionStorageCnt: 0,
    cookieStorageCnt: 0,
  };

  componentDidMount() {
    // If there is a local storage grab the data from local storage
    // and store in the state
    if (localStorage.getItem("localcount")) {
      this.setState({ localStorageCnt: localStorage.getItem("localcount") });
    }

    // Get DAta
    if (sessionStorage.getItem("sessionCnt")) {
      this.setState({
        sessionStorageCnt: sessionStorage.getItem("sessionCnt"),
      });
    }

    // Get Cookie Data
    if(Cookies.get('cookieCnt')) {
      this.setState({
        cookieStorageCnt: Cookies.get('cookieCnt'),
      });
    }
  }

  incrementLocalStorageCnt = () => {
    // Set Local Storage K, V
    const currentCnt = parseInt(this.state.localStorageCnt) + 1;
    this.setState({ localStorageCnt: currentCnt });
    localStorage.setItem("localcount", currentCnt);
  };

  clearLocalStorage = () => {
    // clear local storage
    localStorage.removeItem("localcount");
  };

  clearSessionStorage = () => {
    // clear local storage
    sessionStorage.removeItem("sessionCnt");
  };

  incrementSessionStorageCnt = () => {
    // Set Local Storage K, V
    const currentCnt = parseInt(this.state.sessionStorageCnt) + 1;
    sessionStorage.setItem("sessionCnt", currentCnt);
    this.setState({ sessionStorageCnt: currentCnt });
  };

  incrementCookieStorageCnt = () => {
    // Set the Cookie and also set the state
    const currentCnt = parseInt(this.state.cookieStorageCnt) + 1;
    Cookies.set("cookieCnt", currentCnt);
    this.setState({ cookieStorageCnt: currentCnt });
  };

  clearCookieStorage = () => {
    // Clear cookie :
    Cookies.remove("cookieCnt");
  };

  render() {
    return (
      <div className="App">
        <h4>Local Storage Demo</h4>
        <input value={this.state.localStorageCnt} />
        <button onClick={this.incrementLocalStorageCnt}>
          Increment Local Storage count
        </button>
        <button onClick={this.clearLocalStorage}>
          Clear Local Storage count
        </button>

        <h4>Session Storage Demo</h4>
        <input value={this.state.sessionStorageCnt} />
        <button onClick={this.incrementSessionStorageCnt}>
          Increment Session Storage count
        </button>
        <button onClick={this.clearSessionStorage}>
          Clear Session Storage count
        </button>

        <h4>Cookie Storage Demo</h4>
        <input value={this.state.cookieStorageCnt} />
        <button onClick={this.incrementCookieStorageCnt}>
          Increment Cookie count
        </button>
        <button onClick={this.clearCookieStorage}>
          Clear Cookie Storage count
        </button>
      </div>
    );
  }
}

export default App;
