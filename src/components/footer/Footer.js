import React from 'react';
import { //Link, 
  NavLink} from "react-router-dom";
import classes from "../header/header.module.css"


function Footer(props) {
  // const navigate = useNavigate();

  // const backTo =() => {
  //   navigate(-1)
  // }

  return (
    <div className='footer'>
      <ul className='footerWrapper'>
      {/* <button onClick={backTo}>Назад</button> */}

       <li>
        <NavLink to='/' className={classes.link}>Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={classes.link}>О нас</NavLink>
          </li>
        <li>
          <NavLink to="/portfolio" className={classes.link}>Портфолио</NavLink>
          </li>
      </ul>
    </div>
  );
}

export default Footer;