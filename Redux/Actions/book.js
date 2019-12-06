import Axios from 'axios';

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get('http://192.168.100.155:9000/book'),
  };
};

export const getBookbyId = id => {
  return {
    type: 'GETBOOKBY_ID',
    payload: Axios.get(`http://192.168.100.155:9000/book${id}`),
  };
}