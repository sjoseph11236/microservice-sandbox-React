import React, { useEffect, useState }  from 'react';


const User = (props) => {
  const [user, setUser ] = useState({});

  const fetchUser = async () => { 
    const { id } = props.match.params;
    let resposne = await fetch("http://localhost:8000/users/" + id);
    const user = await resposne.json();
    setUser(user);
  }
  // The second argument in useEffect is needed to prevent a rerender of the applicaiton
  useEffect(() => {
    fetchUser();
  }, []);
  

  return (
    <ul key={ user.id }>
      <li>ID: { user.id }</li>
      <li>Name: { user.name }</li>
      <li>Name: { user.email }</li>
      <li>Name: { user.role }</li>
    </ul>
  )
}

export default User;
