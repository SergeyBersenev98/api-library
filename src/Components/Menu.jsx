import React from 'react';
import EachBookRender from './EachBookRender.jsx'
import classes from '../CSS/MainPage.module.css'
import loading from '../media/loading.gif'

const Menu = (props) => { 


  // let EachBook = props?.arrayOfBooks.map(m =>           //share propreties of each book 
  // <EachBookRender openPageWithBook = {props.openPageWithBook} result={m}/>)


  return(
    <div>
      {props.searchIndex !== 0 || props.mistake === true
      ? <div className = {classes.searchResults}>
          результатов по вашему запросу: 
          {props.resultsForSearching}
        </div>
      :<div></div>
      }
      {props.arrayOfBooks !== undefined 
      ?<div className={classes.allBooksGalery}>
        {props?.arrayOfBooks.map(m =>           //share propreties of each book 
        <EachBookRender openPageWithBook = {props.openPageWithBook} result={m}/>)}
       </div>
      :<div>Некорректный запрос</div>}


      {props.searchIndex !== 0 
      ? <button onClick = {props.searchMoreBooks} className={classes.loadMore}>LoadMore</button>
      : <div></div>
      }
      {props.isLoading
      ? <div className={classes.loading}> <img src={loading} alt="loading"/> Loading... </div>
      : <div></div>

      }
    </div>
      )
}

export default Menu