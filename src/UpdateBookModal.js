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

  onSave = () => {

  }

  onCancel = () => {

  }
  
  render() {
    return (
      <Modal
        style={editModalStyle}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.props.onCancel}
        isOpen={this.props.isOpen}>
        <input placeholder='Title'/>
        <input placeholder='Author'/>
        <input placeholder='Date'/>
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
