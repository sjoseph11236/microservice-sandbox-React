import React, { useState, useEffect } from 'react';

const Users = () => {

  const [ users, setUsers] = useState([]);
  const fetchUsers = async () =>  {
    let response = await fetch("http://localhost:8000/users");
    let users = await response.json(); 
    setUsers(users);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  let usersDisplay = users.map((user) => (
    <ul key={ user.id }>
      <li>Name: { user.name }</li>
      <li>Name: { user.email }</li>
      <li>Name: { user.role }</li>
    </ul>
  ));
  
  return (
    <div>
      <h1>Users</h1>
      { usersDisplay }
    </div>
  )
}

export default Users;
