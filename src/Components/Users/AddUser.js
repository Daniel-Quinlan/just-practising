import { useState } from "react";
import Button from "../UI/Button";
import "./AddUser.modules.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  return (
    <form className="input" onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={enteredUsername}
        onChange={usernameChangeHandler}
      />
      <label htmlFor="age">Age (Years)</label>
      <input
        id="age"
        type="number"
        value={enteredAge}
        onChange={ageChangeHandler}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
