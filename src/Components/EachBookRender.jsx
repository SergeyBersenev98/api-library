import React from 'react';
import classes from '../CSS/MainPage.module.css'

const Menu = (props) => { 
  return(
    <div className={classes.bookCard}>
      <div onClick={()=>{props.openPageWithBook(props.result.volumeInfo.imageLinks?.thumbnail,
                                                props.result.volumeInfo.title,
                                                props.result.volumeInfo.authors,
                                                props.result.volumeInfo.categories,
                                                props.result.volumeInfo.description)}}>
        <img src = {props.result.volumeInfo.imageLinks?.thumbnail || 
                    props.result.volumeInfo.imageLinks?.smallThumbnail ||
                    "https://www.infoflick.com/img/movie-noimage.jpg"} alt="book"/>
        <div className={classes.title}>{props.result.volumeInfo.title}</div>
        <div className={classes.authors}>{props.result.volumeInfo.authors}</div> 
        <div className={classes.category}>{props.result.volumeInfo.categories}</div>
      </div>
   </div>
  )
}

export default Menu