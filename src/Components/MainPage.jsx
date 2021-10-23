import React, {useState} from 'react';
import classes from '../CSS/MainPage.module.css'
import Menu from './Menu.jsx'
import Book from './Book.jsx'
import Settings from './Settings.jsx'

const MainPage = (props) => { 

  const [book, setBook] = useState("");

  function handleChange (event){
    const book = event.target.value.replace(/\s/g,"") //delete all white-spaces
    setBook(book)
  }

  function handleSubmitForm (event){
    event.preventDefault();
    props.changeLoading()
    props.searchingBooksThunk(book, props.mainPage.sortBy, props.mainPage.category, 
                              0, true )  /*reload page = true*/
  }

function searchMoreBooks (){
  props.changeLoading();
  props.searchingBooksThunk(book, props.mainPage.sortBy, props.mainPage.category, 
                            props.mainPage.searchIndex, false) /*reload page = false*/
}

  return (
   <div>
     <div className={classes.wrapper}>
       <div className={classes.header}>
          <form onSubmit={handleSubmitForm}>
            <div className={classes.formInput}>
              <input type="text" className = "contr" placeholder="Search..." autoComplete="off" onChange={handleChange}/>
              <button type="submit" className={classes.search}><i className="fas fa-search"></i></button>
            </div>
          </form>
          <Settings setCategory={props.setCategory} setSorting={props.setSorting} category={props.mainPage.category} sortBy={props.mainPage.sortBy}/>
        </div>
        {props.mainPage.mainMenuIsOpen 
          ?<div className={classes.placeholder}>
            <Menu searchIndex = {props.mainPage.searchIndex} 
                  resultsForSearching={props.mainPage.resultsForSearching} 
                  openPageWithBook={props.openPageWithBook}
                  searchMoreBooks={searchMoreBooks}
                  arrayOfBooks = {props.mainPage.arrayOfBooks}
                  isLoading = {props.mainPage.isLoading}
                  changeLoading = {props.changeLoading}
                  mistake = {props.mainPage.mistake}/>
            </div>

          :<div><Book parametrs = {props.mainPage.openBook}/></div>
        }
        {props.mainPage.searchIndex === 0 
        ?<div className={classes.placeholder}>Start searching to see books!</div>
        :<div></div>
        }
      </div>
   </div>
   
  )
}

export default MainPage