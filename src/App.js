import React, { Component } from 'react';
import './App.css';
import  api  from './api';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import Modal from 'react-modal';

const { getBooks, updateBook, deleteBooks } = api;



const editModalStyle ={

  content: {
    maxWidth: '20%',
    maxHeight: '20%',
    top: '30%',
    left: '35%',
  }
}



class App extends Component {  
  
  state = {
    books: [],
    isEditModal: false,
    isEditModal: false,
  };
  
  
  componentDidMount() {    
    
    getBooks()
      .then((books) => {
        this.setState((state) => ({
          books: books 
        }) )
        
      })
  };
  
  setEditModal = () => {
    this.setState((state) => ({
      isEditModal: !state.isEditModal
    }) )
  };

  setDeleteModal = () => {
    this.setState((state) => ({
      isDeleteModal: !state.isDeleteModal
    }) )
  };

  updateBook = (id) => {
    
  }
  

  render() {
    console.log(this.state)    
    return (
      
      <div className="App">


        <Modal
          style={editModalStyle}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.setEditModal}
          isOpen={this.state.isEditModal}>
          <input placeHolder='Title'/>
          <input placeHolder='Author'/>
          <input placeHolder='Date'/>
          <button className='btn' type='button' onClick={this.setEditModal}>
            Save
          </button>
          <button className='btn' type='button' onClick={this.setEditModal}>
            Cancel
          </button>
        </Modal>



        <Modal
          style={editModalStyle}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.setDeleteModal}
          isOpen={this.state.isDeleteModal}>
          <h1>Are you sure?</h1> 
          <button>Delete</button>
          <button>Cancel</button>
        </Modal>
          

          
          <ul className='book-tile-container'>{
            this.state.books.map(({id, author, title, date}) =>(
            <li key={id} className='book-tile'>


              
              <h1>
                {title}
              </h1>
              <p>
                This book was written by {author} in {date}
              </p>
              <img src='' alt=''/>
              <button className='' onClick={this.setEditModal}>edit icon</button>
              <button className='book-tile-delete-button' onClick={this.setDeleteModal}>delete button</button>
              

            </li>
            ) )
        }
          
        </ul>
        <div className=''>
        </div>
        
      </div>
    );
  }
}

export default App;
