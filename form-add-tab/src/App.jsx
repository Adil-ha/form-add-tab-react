import { useState, useEffect } from "react";
import FormComponent from "./components/FormComponents";
import ArrayComponent from "./components/ArrayComponent";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="container">
        <FormComponent addUser={addUser} />
        <hr />
        <ArrayComponent users={users} />
      </div>
    </div>
  );
}

export default App;
