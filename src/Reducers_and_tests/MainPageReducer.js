import {searchingBooksAPI} from '../api/API'

const SET_SEARCHING_BOOKS_ARRAY = 'SET-SEARCHING-BOOKS-ARRAY'
const SET_CATEGORY = 'SET-CATEGORY'
const SET_SORTING = 'SET-SORTING'
const OPEN_PAGE_WITH_BOOK = 'OPEN-PAGE-WITH-BOOK'
const CHANGE_LOADING = 'CHANGE-LOADING'

let initialState = {
  arrayOfBooks: [],
  category: "all",
  sortBy: "relevance",
  searchIndex: 0,
  mainMenuIsOpen: true,
  resultsForSearching: null,
  isLoading: false,
  mistake: false,
  openBook : {
    img: null,
    title: null,
    authors: null,
    category: null,
    description: null,
  }
}
    

let MainPageReducer = (state = initialState, action) => {
   switch (action.type) {  
    case SET_SEARCHING_BOOKS_ARRAY : {
      let stateCopy = JSON.parse(JSON.stringify(state))
      stateCopy.mistake = false                                 //catch mistakes
      stateCopy.isLoading = !stateCopy.isLoading                //change loading status
      stateCopy.mainMenuIsOpen = true;
      stateCopy.resultsForSearching = action.array.totalItems 
      if(action.array.totalItems !==0){
        if (action.reload===true){                              //if it was clicked by SEARCH
          stateCopy.arrayOfBooks = action.array.items
          stateCopy.searchIndex = 30
          return stateCopy
        }else{                                                  //if it was clicked by LOAD MORE
          stateCopy.arrayOfBooks = state.arrayOfBooks.concat(action.array.items)
          stateCopy.searchIndex = state.searchIndex + 30
          return stateCopy
        }
      }else{
        stateCopy.mistake = true
        return stateCopy
     }
    }
    case SET_CATEGORY : {
      let stateCopy = {...state, category: action.category}
      return stateCopy
    }
    case SET_SORTING : {
      let stateCopy = {...state, sortBy: action.sortBy}
      return stateCopy
    }
    case OPEN_PAGE_WITH_BOOK : {
      let stateCopy = JSON.parse(JSON.stringify(state))
      stateCopy.openBook.img = action.img;
      stateCopy.openBook.title = action.title;
      stateCopy.openBook.authors = action.authors;
      stateCopy.openBook.categories = action.categories;
      stateCopy.openBook.description = action.description;
      stateCopy.mainMenuIsOpen = false
      return stateCopy
    }
    case CHANGE_LOADING : {
      let stateCopy = JSON.parse(JSON.stringify(state))
      stateCopy.isLoading = !stateCopy.isLoading
      return stateCopy
    }
         default:
       return state;
  }
}

//Action Creators
export const searchingBooksAC = (arrayOfBooks, reload) => {
  return {
    type: SET_SEARCHING_BOOKS_ARRAY,
    array: arrayOfBooks,
    reload: reload,
  }
}

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category: category
  }
}

export const setSorting = (sortBy) => {
  return {
    type: SET_SORTING,
    sortBy: sortBy
  }
}

export const openPageWithBook = (img, title, authors, categories, description) => {
  return {
    type: OPEN_PAGE_WITH_BOOK,
    img, title, authors, categories, description
  }
}

export const changeLoading = () => {
  return {
    type: CHANGE_LOADING
  }
}

//THUNKS
export const searchingBooksThunk = (searchingBookName, sortBy, category, searchIndex, reload) => {
  if (category === "all"){category = ""}
  return (dispatch) => {
    searchingBooksAPI(searchingBookName, sortBy, category, searchIndex).then(response => {
    dispatch(searchingBooksAC(response.data, reload))}
                        ).catch(err => { 
                          if (err.response) {        // client received an error response (5xx, 4xx)
                            alert('page not available')
                          } else if (err.request) { 
                            alert('bad gateway')     // client never received a response, or request never left 
                          } else { 
                            console.log(err)         // anything else 
                          } 
                        })
            }
}

export default MainPageReducer;