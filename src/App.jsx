import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

import Users from "./components/Users";
import UserContext, { usercontext } from "./Context/UserContext";
import { useContext } from "react";

const App = () => {
  const { toggler } = useContext(usercontext);

  // console.log("users->");

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      {toggler ? <Login /> : <Register />}
      <Users />
    </main>
  );
};

export default App;
