import React, {useState } from 'react'; 
import UsersList from '../../components/usersList/UsersList'; 
 
function MainPage(props) { 
  const [ users, setUsers] = useState([]);
  

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => setUsers(data))
  // },[])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }
  return ( 
      <div>
        <h1>Main Page</h1>
        <button onClick={getUsers}>Сlick here</button>
        <UsersList users={users}/>
      </div>
  ); 
} 
 
export default MainPage;

//!6дз) создайте компоненту MainPage в папке pages сделайте запрос 
//!по клику на кнопку по апи https://jsonplaceholder.typicode.com/users,
//!создайте компонету Users, и отобразить данные пользователя 
//!(#- нумерация,name, email, username)
//!в таблице (table) в котором сделайте 
//!заголовки: имя, email, username