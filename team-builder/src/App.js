import React, {useState} from 'react';
import './App.css';
import Team from './components/Team.js'
import TeamForm from './components/TeamForm.js'

const initialTeamsList = [
{
  username: 'Cristina',
  email: 'cristina@cristina.com',
  role: 'Front-End Web Devloper'
}
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [teamList, setTeamList] = useState(initialTeamsList)

  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
    <TeamForm/>
    </div>
  );
}

export default App;
