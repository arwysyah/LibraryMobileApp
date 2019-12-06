import Axios from 'axios'

export const getTitle = (title) =>{
    return{ 
        type : 'GET_TITLE',
        payload : Axios.get(`http://192.168.100.155:9000book/filter/books/search/${title}`) 
    }
}