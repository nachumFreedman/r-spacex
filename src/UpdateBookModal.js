import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal';

const editModalStyle ={
  content: {
    maxWidth: '20%',
    maxHeight: '15%',
    top: '30%',
    left: '35%',
    borderRadius: '5px',
    minWidth: '200px',   
  }
}

class UpdateBookModal extends Component {  
  
  state = {
    isTitleInvalid: false,
  };


  componentDidMount() {
    this.setState(this.props.initialState)  
  }
  
  onSave = () => {
    this.props.onSave(this.state)
        .catch(()=> this.setState({isTitleInvalid: true}))
  }

  
  handleTitleInput = (event) => {
    this.setState({title: event.target.value})
  }
  
  handleAuthorInput = (event) => {
    this.setState({author: event.target.value})
  }
  
  handleDateInput = (event) => {
    this.setState({date: event.target.value})
  }
  

  
  render() {
    return (
      <Modal
        style={editModalStyle}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.props.onCancel}
        isOpen={this.props.isOpen}>
        <input placeholder='Title'
               value={this.state.title}
               onChange={this.handleTitleInput}/>
        {
          this.state.isTitleInvalid ?
          <span style={{color: 'red'}}>
            Thanks for your input but we have this book
          </span>
          : null
        }
        <input placeholder='Author'
               value={this.state.author}
               onChange={this.handleAuthorInput}/>
        <input placeholder='Date'
               value={this.state.date}
               onChange={this.handleDateInput}/>
        <button className='btn' type='button' onClick={this.onSave}>
          Save
        </button>
        <button className='btn' type='button' onClick={this.props.onCancel}>
          Cancel
        </button>
      </Modal>
    );
  }
}

export default UpdateBookModal;
