import React from 'react';
import classes from './MainPage.module.css'


function MainPage(props) {
  return (
    <div className={classes.home}>
      <div className={classes.home_inner}>
      <h1>Main Page</h1>
      <h2>наши другие потенциальные блоки</h2>
        <ul>
          <li>другие блоки</li>
          <li>наши контакты</li>
          <li>карточки и футеры</li>
        </ul>
      </div>
    </div>
  );
}
export default MainPage;