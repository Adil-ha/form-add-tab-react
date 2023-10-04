import "./App.css";
import { useState, useEffect } from "react";
import FormComponent from "./components/FormComponents";
import ArrayComponent from "./components/ArrayComponent";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const addUser = ({ firstname, lastname, date }) => {
    const newUser = {
      firstname,
      lastname,
      date,
    };

    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <FormComponent addUser={addUser} />
      <ArrayComponent users={users} />
    </div>
  );
}

export default App;
