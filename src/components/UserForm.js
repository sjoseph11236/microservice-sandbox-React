import React from 'react';

const UserForm = (props) => {
  return (
    <div>
      <h1>{ props.type === "create" ? "Create New User" : "Update User" }</h1>
    </div>
  )
}

UserForm.defaultProps = {
  type: "create"
}

export default UserForm;
