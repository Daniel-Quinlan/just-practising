import { useState } from "react";
import Card from "./Components/UI/Card";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="w-screen h-screen bg-background pt-12">
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
