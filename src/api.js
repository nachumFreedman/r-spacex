
import bookList from './bookList.json';

let books = bookList;

export default {
  getBooks: () => {
    return Promise.resolve( books )
  },
  
  updateBook: (newBook)=> {
    if(books.find(({title})=>
      newBook.title === title)){
      return Promise.reject()
    } else{
      books = books.map(book=> 
        ( newBook.id !== book.id) ?
                             book : newBook 
      );
      return Promise.resolve();
    }
  },
  
  deleteBook: (id)=> {
    books = books.map(book=> 
      ( book.id !== id) ?
                           book : undefined 
    ).filter(i => i)
    return Promise.resolve();
  },

  addBook: (book)=> {
    if(books.find(({title})=>
      book.title === title)){
      return Promise.reject()
    } else {
      book.id = '' + Math.random();
      books = books.concat(book);
      return Promise.resolve();
    }
  }
}

