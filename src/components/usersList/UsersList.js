import React from 'react';

const UsersList = ({users})  => (
  <ul>
    {users.map((user,key) => <li key={key}>{user}</li>)}
  </ul>
);
  

export default UsersList;