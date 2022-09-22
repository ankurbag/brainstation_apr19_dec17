import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todoItems: [],
    theme: 'light'
  };

  /*
   * For this exercise, try to set and get data from localStorage and use this data to update the todoItems and theme in the state object
   * You will need to use JSON.parse() to get data from localStorage and convert it to a js array
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   */
  componentDidMount() {
    // check if localStorage data exists
    // if localStorage exists update state using setState if data exists
    // Get the local storage
    if (localStorage.getItem("todoItems")) {
      // set state
      // We used JSON.parse() to convert string data to array
      this.setState({
        todoItems: JSON.parse(localStorage.getItem("todoItems")),
      });
    }

    if (localStorage.getItem("theme")) {
      // set state
      this.setState({ theme: localStorage.getItem("theme") });
    }

  }

  /*
   * When new items are added try to set localStorage with the array of items
   * You will need to use JSON.stringify() to format the js array into a string in order to save in localStorage
   */
  handleFormSubmit = (event) => {
    event.preventDefault();
    const item = event.target.todoItem.value;
    const currentState = [...this.state.todoItems, item];
    
    this.setState({
      todoItems: currentState // ...spread operator used to copy array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Copy_an_array
    });
    // Set in my Local storage
    // JSON.stringify() to format the js array into a string in order to save in localStorage
    localStorage.setItem('todoItems', JSON.stringify(currentState));
  };
  
  /*
   * When theme toggle button is clicked try to set localStorage with the value of theme
   * Because it's already a string you can save that value into localStorage without using JSON.stringify
   */
  handleThemeToggle = (_event) => {
    const currentState  = (this.state.theme === 'light') ? 'dark' : 'light';
    this.setState({
      theme: currentState
    });
    // Set the local storage
    localStorage.setItem('theme', currentState);;
  }

  render() {
    // we can conditionally set our CSS class based on current theme value
    const appClass = this.state.theme === 'dark' ? 'App App--dark' : 'App';

    return (
      <div className={appClass}>
        <h1>Todo</h1>
        <p>
          <button onClick={this.handleThemeToggle}>
            Toggle {this.state.theme === 'light' ? 'dark 🌙' : 'light ☀️'} theme
          </button>
        </p>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="todoItem" placeholder="todo item" />
          <button type="submit">add item</button>
        </form>
        <ul className="todo-list">
          {this.state.todoItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
