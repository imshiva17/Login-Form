import React from "react";

const Users = (props) => {
  const { users, setUsers } = props;

  const deleteHandler = (id) => {
    const copyUsers = [...users];
    const filteredUsers = copyUsers.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };

  const userList = users.map((user) => {
    return (
      <li
        key={user.id}
        className="bg-transparent border-2 border-gray-400 backdrop-blur-md shadow-2xl py-2 w-3xs px-5 text-white rounded-xl mt-8 flex justify-between items-center"
      >
        <span>
          <h1 className="text-3xl">{user.username}</h1>
          <h2 className="text-base">{user.email}</h2>
        </span>
        <button
          onClick={() => deleteHandler(user.id)}
          className="text-md font-bold text-red-700"
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <ul className="flex justify-start items-center gap-8 w-full flex-wrap px-9 pb-8 absolute bottom-9">

      {users.length ? (
        userList
      ):(
        <h1></h1>
      )}
      
    </ul>
  );
};

export default Users;
