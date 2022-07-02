import React from 'react';


function UsersList (props){
  return (
      <div>
          <p>Users table</p>
          <table border='1'>
              <thead>
                  <tr>
                      <td>#</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Username</td>
                  </tr>
              </thead>
              <tbody>
              {props.users.map((user, key) => {
                  return (
                      <tr key={key}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.username}</td>
                      </tr>
                  )
              })}
              </tbody>

          </table>
      </div>
  )
}

export default UsersList;