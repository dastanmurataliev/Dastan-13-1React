import React, {useState } from 'react'; 
import UsersList from '../../components/usersList/UsersList'; 
import classes from './PortfolioPage.module.css'

function PortfolioPage(props) {
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
      <div className={classes.form}>
        <h3>Наш запрос с таблицей из предыдущей ДЗ6</h3>
        <button className={classes.btn} onClick={getUsers}>Сlick</button>
        <UsersList users={users}/>
      </div>
  );
}

export default PortfolioPage;