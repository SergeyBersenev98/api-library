import React from 'react';
import classes from '../CSS/MainPage.module.css'

const Book = (props) => { 
  return(
    <div className={classes.bookPage}>
      <div>
         <img src = {props.parametrs.img || 
        "https://www.infoflick.com/img/movie-noimage.jpg" 
        } alt="book"/>
      </div>
      <div>
        <div className={classes.titleInBookPage}>{props.parametrs.title}</div>
        <div className={classes.categoryInBookPage}>{props.parametrs.categories}</div>
        <div className={classes.authorsInBookPage}>{props.parametrs.authors}</div> 
        <div className={classes.descriptionInBookPage}>{props.parametrs.description}</div> 
      </div>
    </div>
  )
}

export default Book