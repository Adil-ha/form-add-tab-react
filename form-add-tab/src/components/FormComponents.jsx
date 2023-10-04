import React, { useState } from "react";

const FormComponent = (props) => {
  const { addUser } = props;

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addUser({
      lastname,
      firstname,
      date,
    });

    setLastname("");
    setFirstname("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Form User</h1>
      <hr />
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
