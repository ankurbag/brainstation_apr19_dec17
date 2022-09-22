import Header from './components/Header';
import Button from './components/Button';
import List from './components/List';
import users from './data/users.json';
import './App.scss';

function App() {
  function handleBtnClick(event) {
    console.log('handleBtnClick called from App.js', event.target);
  }

  return (
    <div className="App">
      <h1>React Props 101</h1>
      <Header text="hello world" />

      <Button text="button text" handleBtnClick={handleBtnClick} />
      <Button text="another button" handleBtnClick={handleBtnClick} />

      <List users={users} secondArr={['test']} />

      <Button text="call to action" size="large" />
      <Button text="another button" />
      <Button text="read more" size="small" />
    </div>
  );
}

export default App;
