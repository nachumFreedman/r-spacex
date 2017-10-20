import React, { Component } from 'react';
import './App.css';
import  api  from './api';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';


const { getBooks, updateBooks, deleteBooks } = api;


class App extends Component {  
  
  state = {
    books: []
  };
  
  
  componentDidMount() {    
    
    getBooks()
      .then((books) => {
        JSON.stringify(books)
      })
      .then((books) => {
        this.setState((state) => ({
          books: books 
        }) )
        
      })
    console.table(this.state.books)    
  };
  
  

  render() {
    return (

      <div className="App">
        <ul>{
          this.state.books.map((id, author, title, date) =>(
            <li key={id}>

              <h1>
                {title}
              </h1>
              <p>
                This book was written by {author} in {date}
              </p>
              <img src='' alt=''/>
              <button className=''>edit icon</button>
              <button className='book-tile-delete-button'></button>
              

            </li>
          ) )
        }
          
        </ul>
        <div className='book-tile'>
        </div>
        
      </div>
    );
  }
}

export default App;
