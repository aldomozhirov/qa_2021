import React from 'react';
import logo from './logo.svg';
import './App.css';
import {isNumberOddOrEven} from './utils/utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Это ветка test-coverage-task, которая поможет вам выполнить практическое задание.
        </p>
        <p>
          Редактируйте <code>src/App.js</code> и сохраните для обновления!
        </p>
        <p>
          {isNumberOddOrEven(10,4)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Изучаем реакт!
        </a>
      </header>
    </div>
  );
}

export default App;