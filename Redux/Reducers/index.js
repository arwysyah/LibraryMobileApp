import {combineReducers} from 'redux';

import {getBooks} from './books';
// import {getByID} from './books'
// import {postBook} from './books'
// import {putBook} from './books'
// import {deleteBook} from './books'
// import {getGenre} from './genre'
// import {getStatus} from './status'
// import {getTitle} from './title'
// import {getCategories} from './categories'

import {Auth} from './Users'
// import {updateStatus} from './updatestatus'
// import {postHistory} from './History'
// import {postWishlist} from './wishlist'
import {borrow} from './Borrow'

const appReducer = combineReducers({
  getBooks,
 
  // getGenre,
  // getStatus,
  // getTitle,
  // getCategories,
borrow,
  Auth,
  
  // postWishlist,
  // deleteInWishlist
});
export default appReducer;
