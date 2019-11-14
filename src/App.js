import React, {useState} from 'react';
import './App.css';
import MemberForm from './MemberForm';
import Members from './Members';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Ryan Cooper',
      email: 'coope1rk@gmail.com',
      role: 'Web Developer',
      id: 0
    },
    {
      name: 'Naruto Uzamaki',
      email: 'naruto@hiddenleaf.com',
      role: 'Genin Ninja',
      id: 1
    },
    {
      name: 'Dion Warren',
      email: 'dwarren@eschool.com',
      role: 'Student',
      id: 2
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role,
      id: member.id
    };
    setTeamMembers([...teamMembers, newMember]);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST</h1>
        <MemberForm addNewMember={addNewMember} />
        <Members teamMembers={teamMembers} />
      </header>
    </div>
  );
}

export default App;
