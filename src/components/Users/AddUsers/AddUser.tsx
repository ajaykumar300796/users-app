import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import AddUserStles from "./AddUser.module.css";

const AddUser = (props: any) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event: any) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return;
    }
    if (+enteredAge < 1) {
        return;
    }
    console.log(enteredUsername, "--", enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const inputChangeHandler = (input: any, value: any) => {
    console.log(input, value);
    if (input === "username") {
      setEnteredUsername(value);
    } else {
      setEnteredAge(value);
    }
  };

  return (
    <Card cssClass={AddUserStles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUsername}
          onChange={(event: any) =>
            inputChangeHandler("username", event.target.value)
          }
          id="username"
          type="text"
        />

        <label htmlFor="age">Age (Years)</label>
        <input
        value={enteredAge}
          onChange={(event: any) =>
            inputChangeHandler("age", event.target.value)
          }
          id="age"
          type="number"
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
