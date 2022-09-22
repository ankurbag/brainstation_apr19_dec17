import { Component } from 'react';
import Cookies from 'js-cookie';
import cookieMonster from './cookie-monster.jpeg';
import catBox from './cat-box.png';
import './App.css';

class App extends Component {
  state = {
    pageViewsCookie: 0,
    pageViewsLocal: 0,
  };

  componentDidMount() {
    this.cookiePageCount();
    this.localStoragePageCount();
  }

  // Cookie Example: set and increment
  cookiePageCount() {
    let numViews = Cookies.get('numViews');
    if (!numViews) {
      numViews = 1;
    } else {
      numViews++;
    }
    Cookies.set('numViews', numViews, { expires: 1 });
    this.setState({ pageViews: numViews });
  }

  // Cookie delete method
  deleteCookie = () => {
    Cookies.remove('numViews');
    this.setState({ pageViews: 0 });
  };

  // localStorage Example: set and increment
  localStoragePageCount() {
    // 1 get local storage
    let numViews = localStorage.getItem('pageViews');
    console.log(numViews); // if doesn't exist would be null
    // 2 check if local storage is set
    if (!numViews) {
      numViews = 1;
    } else {
      numViews++;
    }
    // 3 setting local storage
    localStorage.setItem('pageViews', numViews);
    // 4 setting state
    this.setState({ pageViewsLocal: numViews });
  }

  // localStorage delete method
  deleteLocalStorage = () => {
    localStorage.removeItem('pageViews');
    this.setState({ pageViewsLocal: 0 });
  };

  render() {
    return (
      <div className="App">
        <main>
          <h1>Browser Storage</h1>
          <hr />
          <section>
            <h2>Cookie Count 🍪</h2>
            <img src={cookieMonster} alt="Cookie Monster" width="150" />
            <p>
              <strong>Page Views: {this.state.pageViews}</strong>
            </p>
            <button onClick={this.deleteCookie}>delete cookie 🍪</button>
            <hr />
          </section>
          <section>
            <h2>Local Storage Count 📦</h2>
            <img src={catBox} alt="Cats in a box" width="150" />
            <p>
              <strong>Page Views: {this.state.pageViewsLocal}</strong>
            </p>
            <button onClick={this.deleteLocalStorage}>
              delete localStorage 📦
            </button>
            <hr />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
