import Axios from 'axios';

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get('https://mybookcollections.herokuapp.com/book'),
  };
};

export const getBookbyId = id => {
  return {
    type: 'GETBOOKBY_ID',
    payload: Axios.get(`https://mybookcollections.herokuapp.com/book${id}`),
  };
}