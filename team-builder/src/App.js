import React, { useState } from "react";
import "./App.css";
import Team from "./components/Team.js";
import TeamForm from "./components/TeamForm.js";

const initialTeamsList = [
  {
    username: "Cristina Altreche",
    email: "cristina@something.com",
    role: "Web Devloper",
  },
];

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

function App() {
  //USESTATE
  const [teamList, setTeamList] = useState(initialTeamsList);
  const [error, setError] = useState("");

  const [formValues, setFormValues] = useState(initialFormValues);

  //EVENTS
  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //ON SUBMIT EVENT
  const onSubmit = (event) => {
    //1. PREVENT DEFAULT(refresh of page)
    event.preventDefault();
    //2. If statement for any errors
    if (!formValues.username || !formValues.email || !formValues.role) {
      setError("You need to fill out all the info");
      return;
    }
    setError("");
    //3. Create new OBJECT for inputs to be stored
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    //4. Update 'state' list with new Object
    setTeamList((teams) => [newTeamMember, ...teams]);
    //5. Optional: clear the form
    setFormValues(initialFormValues);
  };

  return (
    <div className="container">
      <header>
        <h1>Team App!</h1>
      </header>
      <span style={{color: 'red'}}>{error}</span>
      <TeamForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {teamList.map((team) => {
        return <Team key={team.id} details={team} />;
      })}
    </div>
  );
}

export default App;
