import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal';

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

class UpdateBookModal extends Component {  
  
  state = {
  };


  componentDidMount() {
    this.setState(this.props.intialState)  
  }
  
  onSave = () => {
    
  }

  onCancel = () => {

  }
  
  handTitleInput = (event) => {
    this.setState({title: event.targer.value})
  }
  
  handAuthorInput = (event) => {
    this.setState({author: event.targer.value})
  }
  
  handDateInput = (event) => {
    this.setState({date: event.targer.value})
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
        <input placeholder='Author'
               value={this.state.author}
               onChange={this.handleAuthorInput}/>
        <input placeholder='Date'
               value={this.state.date}
               onChange={this.handleDateInput}/>
        <button className='btn' type='button' onClick={this.props.onSave}>
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
