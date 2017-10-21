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
    borderRadius: '5px',
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
  
  toggleEditModal = () => {
    this.setState((state) => ({
      isEditModal: !state.isEditModal
    }) )
  };

  toggleDeleteModal = () => {
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
          onRequestClose={this.toggleEditModal}
          isOpen={this.state.isEditModal}>
          <input placeholder='Title'/>
          <input placeholder='Author'/>
          <input placeholder='Date'/>
          <button className='btn' type='button' onClick={this.toggleEditModal}>
            Save
          </button>
          <button className='btn' type='button' onClick={this.toggleEditModal}>
            Cancel
          </button>
        </Modal>
        <Modal
          style={editModalStyle}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.toggleDeleteModal}
          isOpen={this.state.isDeleteModal}>
          <h1>Are you sure?</h1> 
          <button>Delete</button>
          <button onClick={this.toggleDeleteModal}>Cancel</button>
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
            <button type='button'
                    className='btn btn-default'
                    onClick={this.toggleEditModal}>
              edit icon
            </button>
            <button className='book-tile-delete-button'
                    onClick={this.toggleDeleteModal}>
              delete button
            </button>
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
