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
  //USESTATE
  const [teamList, setTeamList] = useState(initialTeamsList)

  const [formValues, setFormValues] = useState(initialFormValues)

  //EVENTS
  const onInputChange = event => {
    const { name, value} = event.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className="App">
    <TeamForm values={formValues} onInputChange={onInputChange} onSubmit={onSubmit}/>

    {
      teamList.map(team => {
        return <Team key={team.id} details={team} />
      })
    }
    </div>
  );
}

export default App;
