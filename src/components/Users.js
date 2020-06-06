import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const deletUser = async (id) => { 
    await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE"
    })

    // Trigger a re-render
    fetchUsers();
  }

  let usersDisplay = users.map((user) => (
    <ul key={ user.id }>
      <li>ID: { user.id }</li>
      <li>Name: { user.name }</li>
      <li>Name: { user.email }</li>
      <li>Name: { user.role }</li>
      <Link to={`/users/${user.id}`}>See Full User</Link>
      <Link to={`/users/update/${user.id}`}>Update User</Link>
      <button onClick={()=> deletUser(user.id)}> Delete</button>
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
