import React, { Component } from 'react';
import './App.css';
import  api  from './api';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import Modal from 'react-modal';
import UpdateBookModal from './UpdateBookModal'

const { getBooks, updateBook, deleteBook } = api;

const editModalStyle ={
  content: {
    maxWidth: '20%',
    maxHeight: '20%',
    top: '30%',
    left: '35%',
    borderRadius: '5px',
    minWidth: '200px'
  }
}

class App extends Component {  
  
  state = {
    books: [],
    isEditModal: false,
    isDeleteModal: false,
  };
  

  componentDidMount() {      
    this.updateBookList()
  };

  updateBookList = ()=>{
    getBooks()
      .then((books) => {
        this.setState((state) => ({
          books: books 
        }) )      
      })
  }
  
  toggleEditModal = () => {
    this.setState((state) => ({
      isEditModal: !state.isEditModal
    }) )
  };

  toggleDeleteModal = (id) => {
    this.setState((state) => ({
      isDeleteModal: id || false
    }) )
  };

  deleteBook = () => {
    deleteBook(this.state.isDeleteModal)
      .then(this.updateBookList)
      .then(this.toggleDeleteModal)
  }
  

  render() {
    console.log(this.state)    
    return (
      <div className="App">
        {
          this.state.isEditModal ? 
         <UpdateBookModal
           isOpen={true}
           onSave={()=>console.log('save')}
           onCancel={this.toggleEditModal}
           initialState={this.state.isEditModal}/>
          : null
        }
        <Modal
          style={editModalStyle}
          shouldCloseOnOverlayClick={true}
          onRequestClose={()=>this.toggleDeleteModal()}
          isOpen={!!this.state.isDeleteModal}>
          <h1>Are you sure?</h1> 
          <button onClick={this.deleteBook}>Delete</button>
          <button onClick={()=>this.toggleDeleteModal()}>Cancel</button>
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
                      onClick={()=>this.toggleEditModal({id, author, title, date})}>
                edit icon
              </button>
              <button className='book-tile-delete-button'
                      onClick={()=>this.toggleDeleteModal(id)}>
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
