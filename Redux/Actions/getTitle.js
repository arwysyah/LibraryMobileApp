import Axios from 'axios'

export const getTitle = (title) =>{
    return{ 
        type : 'GET_TITLE',
        payload : Axios.get(`https://mybookcollections.herokuapp.com/filter/books/search/${title}`) 
    }
}