import * as axios from 'axios';

export const searchingBooksAPI = (searchingBookName, sortBy, category, startIndex) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}+${searchingBookName}&orderBy=${sortBy}&maxResults=30&U&startIndex=${startIndex}`, 
  {}, {withCredentials : true, 
  headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}})
 }