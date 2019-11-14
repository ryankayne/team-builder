import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Ryan',
      email: 'coope1rk@gmail.com',
      role: 'Web Developer',
      id: 0
    },
    {
      name: 'Naruto',
      email: 'naruto@hiddenleaf.com',
      role: 'Genin',
      id: 1
    },
    {
      name: 'Dion',
      email: 'dwarren@eschool.com',
      role: 'Student',
      id: 2
    }
  ]);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
