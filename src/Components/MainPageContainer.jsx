import {connect} from 'react-redux'
import MainPage from './MainPage.jsx'
import {setCategory, searchingBooksThunk, setSorting, openPageWithBook, changeLoading} from '../Reducers_and_tests/MainPageReducer'
import {compose} from 'redux'

  let f1 = (state) => {
    return{
      mainPage: state.MainPage,
    }
  }

export default compose(connect(f1, {searchingBooksThunk, setCategory, setSorting, openPageWithBook, changeLoading}))(MainPage)