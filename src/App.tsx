import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUsers/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

const users: any = [];

function App() {
  const emptyArr: any[] = []
  const [usersList, setUsersList] = useState(emptyArr);

  const addUserHandler = (username: any, age: any) => {
    setUsersList((prevUsersList: any) => {
      return [...prevUsersList, { name: username, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 && <UsersList users={usersList}/>}
    </div>
  );
}

export default App;
