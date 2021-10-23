import MainPageReducer, {searchingBooksAC, changeLoading} from "./MainPageReducer";


it ('add new books from searching', () => {
  // start data
  let data = {items: [1,2,3,4,5]}
  let action = searchingBooksAC(data, true)
  let state = {
    arrayOfBooks: [],
  }
// action
  let newState = MainPageReducer(state, action)
//expected
  expect(newState.arrayOfBooks).toBe(data.items)
})

it ('button SEARCH was pressed', () => {
  //start data
  let data = {items: [1,2,3,4,5],
              totalItems: 5}
  let action = searchingBooksAC(data, true)
  let state = {
    arrayOfBook: [],
    searchIndex: 0,
    mainMenuIsOpen: true,
    resultsForSearching: null,
  }
  //action
  let newState = MainPageReducer(state, action)
  //expected
  expect(newState.resultsForSearching).toBe(data.totalItems)
  expect(newState.searchIndex).toBe(30)
  expect(newState.mainMenuIsOpen).toBe(true)
})

it ('button SEARCH and then button LOAD MORE was pressed', () => {
  //start data
  let data = {items: [1,2,3,4,5],
              totalItems: 5}
  let action1 = searchingBooksAC(data, true)
  let action2 = searchingBooksAC(data, false)
  let state = {
    arrayOfBook: [],
    searchIndex: 0,
    mainMenuIsOpen: true,
    resultsForSearching: null,
  }
  //action
  let state1 = MainPageReducer(state, action1)
  let state2 =  MainPageReducer(state1, action2)
  //expected
  expect(state2.resultsForSearching).toBe(data.totalItems)
  expect(state2.searchIndex).toBe(60)
})

it ('change loading', () => {
  //data
  let action = changeLoading()
  let state = {
    isLoading: true
  };
  //action 
  let state1 = MainPageReducer(state, action)
  //
  expect(state1.isLoading).toBe(!state.isLoading)
})

it ('change loading with succesfully APi_request', () => {
  //data
  let data = {items: [1,2,3,4,5],
    totalItems: 5}
  let action = changeLoading()
  let action2 = searchingBooksAC(data, true)
  let state = {
    isLoading: true
  };
  //action 
  let state1 = MainPageReducer(state, action)
  let state2 = MainPageReducer(state1, action2)
  //
  expect(state1.isLoading).toBe(!state.isLoading)
})