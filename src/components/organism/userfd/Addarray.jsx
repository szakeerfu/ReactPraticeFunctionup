import React, { useState } from 'react';

function  Addarray() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddUser = () => {
    if (name.trim() !== '') {
      setUsers([...users, name]);
      setName('');
    }
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

 

  return (
    <div>
      <h1>User Management</h1>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        
        placeholder="Enter user name"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Addarray;
