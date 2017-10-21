
import bookList from './bookList.json';

let books = bookList;

export default {
  getBooks: () => {
    return Promise.resolve( books )
  },
  
  updateBook: (newBook)=> {

    books = books.map(book=> 
      ( newBook.id !== book.id) ?
                           book : newBook 
    );
    return Promise.resolve();
  },
  
  deleteBook: (id)=> {
    
    books = books.map(book=> 
      ( book.id !== id) ?
                           book : undefined 
    ).filter(i => i)
    
    return Promise.resolve();
  }
  
}

