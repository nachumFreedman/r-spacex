import React, { Component } from 'react';
import Modal from 'react-modal';

const editModalStyle ={
  content: {
    minWidth: '25%',
    minHeight: '30%',
    top: '30%',
    left: '35%',
    borderRadius: '5px',
    width: '50px',   
    height: '17px',
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
        {
          this.state.isTitleInvalid ?
          <span style={{color: 'red', fontSize: '.8em'}}>
            Thanks for your input but we already have this book
          </span>
       
          : null
        }
        <input placeholder='Title'
               value={this.state.title}
               onChange={this.handleTitleInput}
               className='updatemodal-inputbox'/>
        
        <input placeholder='Author'
               value={this.state.author}
               onChange={this.handleAuthorInput}
               className='updatemodal-inputbox'/>

        <input placeholder='Date'
               value={this.state.date}
               onChange={this.handleDateInput}
               className='updatemodal-inputbox'/>
        <br />        
        <button className='btn btn-primary' onClick={this.onSave}>
          Save
        </button>
        <button className="btn btn-default"  onClick={this.props.onCancel}>
          Cancel
        </button>
      </Modal>
    );
  }
}

export default UpdateBookModal;
