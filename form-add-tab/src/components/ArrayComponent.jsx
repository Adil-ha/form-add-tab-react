import React from "react";

const ArrayComponent = (props) => {
  const { users } = props;

  return (
    <>
      <h1>Array Users</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Lastname</th>
            <th>Firstname</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.lastname}</td>
              <td>{user.firstname}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ArrayComponent;
