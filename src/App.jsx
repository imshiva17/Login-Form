import React, { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Users from "./components/Users";

const App = () => {
  const [toggler, setToggler] = useState(true);
  const [users, setUsers] = useState([]);

  console.log("users->", users);
  

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      {toggler ? (
        <Login toggler={toggler} setToggler={setToggler} users={users} setUsers={setUsers}/>
      ) : (
        <Register toggler={toggler} setToggler={setToggler} users={users} setUsers={setUsers}/>
      )}

      <Users users={users} setUsers={setUsers}/>
    </main>
  );
};

export default App;
