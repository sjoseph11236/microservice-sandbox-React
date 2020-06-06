import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const UserForm = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const  history  = useHistory();

  const clearData = () => {
    setName("");
    setEmail("");
    setRole("");
  }

  const fetchData = async () => { 
    const { id } = props.match.params;
    let resposne = await fetch("http://localhost:8000/users/" + id);
    const user = await resposne.json();

    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  }

  useEffect(() => { 
    if(props.type === "update") fetchData();
  }, [])

  useEffect(() => { 
    if(props.type === "create") clearData();
  }, [props.type])

  const handleSubmit = async () => { 
    const { id } = props.match.params;
    const data = { 
      name, 
      email, 
      role
    } 

    let method = props.type === "update" ? "PUT" : "POST";
    let url = props.type === "update" ? `http://localhost:8000/users/${id}` : "http://localhost:8000/users"
    console.log("here ", url);
    await fetch(url, { 
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // Redirect
    history.push("/users");
  }

  return (
    <div>
      <h1>{ props.type === "create" ? "Create New User" : "Update User" }</h1>
     
      <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={role} placeholder="role" onChange={(e) => setRole(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

UserForm.defaultProps = {
  type: "create"
}

export default UserForm;
