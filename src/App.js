import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./UsersList";

function App() {
  const [users, setUsers] = useState[1];

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const persons = res.data;
      users= [persons];
    });
  });
  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {users.map((person) => (
            <UsersList person = {person}/>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
