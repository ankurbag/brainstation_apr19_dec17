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
    const localStorageTodoItems = localStorage.getItem('todoItems')
    if(localStorageTodoItems) {
      this.setState({
        todoItems: JSON.parse(localStorageTodoItems)
      });
    }
  }

  /*
   * When new items are added try to set localStorage with the array of items
   * You will need to use JSON.stringify() to format the js array into a string in order to save in localStorage
   */
  handleFormSubmit = (event) => {
    event.preventDefault();
    const item = event.target.todoItem.value;
    const updatedState = [...this.state.todoItems, item];
    this.setState({
      todoItems:  updatedState// ...spread operator used to copy array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Copy_an_array
    });
    localStorage.setItem('todoItems', JSON.stringify(updatedState));
  };
  
  /*
   * When theme toggle button is clicked try to set localStorage with the value of theme
   * Because it's already a string you can save that value into localStorage without using JSON.stringify
   */
  handleThemeToggle = (_event) => {
    const updatedTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({
      theme: updatedTheme
    });
    
    localStorage.setItem('theme', updatedTheme);
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
