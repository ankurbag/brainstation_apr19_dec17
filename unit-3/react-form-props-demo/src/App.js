import logo from './logo.svg';
import './styles.css';
import Confirmation from './component/Confirmation';
import Button from './component/Button';

function App() {

  function handleBtnClick(event) {
    console.log('handleBtnClick called from App.js', event.target);
  }

  return (
    <>
    <header class="header">
        <h1 class="header__title">My Class</h1>
    </header>
    <main class="main">
       <section class="card">
            <form id="course-form">
                <legend>Students</legend>
                <fieldset>
                    <ul id="students-list">
                        No students
                    </ul>
                </fieldset>

                <legend>Instructors</legend>
                <fieldset>
                    <ul id="instructors-list">
                        No Instructors 
                    </ul>
                </fieldset>
            </form>
        </section>
    </main>
    </>
  );
}

export default App;
