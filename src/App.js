import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UserList/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [errorText, setErrorText] = useState('');

  const addUserHandler = (newUser) => {
    console.log(newUser);
    if (newUser && !newUser.age || !newUser.name) {
      setInvalid(true);
      setErrorText("Age or username cannot be empty")
      return;
    }
    if (newUser.age < 1) {
      setInvalid(true);
      setErrorText("User`s age cannot be lower then 1")
      return;
    }
    setUsers(users => [...users, newUser]);
  };

  const handleClose = () => {
    setInvalid(false);
  }

  return (
    <div className="container">
      <AddUser onAddUser={addUserHandler}/>

      <UsersList users={users} />
      {invalid && 
        <ErrorModal onClose={handleClose} open={invalid} errorText={errorText}/>
      }
    </div>
  );
}

export default App;
