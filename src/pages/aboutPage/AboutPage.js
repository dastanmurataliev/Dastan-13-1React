import React from 'react';
import classes from './AboutPage.module.css'


function AboutPage(props) {
  return (
    <div>
    <div className={classes.aboutUs}>
      <h1>About Page</h1>
      <p>какая-то информация(якобы что-то интересное,чтобы наши пользователи могли читать и наслаждаться)</p>
      <p>здесь находиться ссылка на мой  <a href="https://github.com/dastanmurataliev/ReactSite.git">репо</a></p>
    </div>
    </div>
  );
}

export default AboutPage;