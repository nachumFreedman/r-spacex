import React, { Component } from 'react';
import './App.css';
import  api  from './api';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import FaMagic from 'react-icons/lib/fa/magic';
import Modal from 'react-modal';
import UpdateBookModal from './UpdateBookModal'

const { getLaunches,   } = api;

const deleteModalStyle ={
  content: {
    maxWidth: '30%',
    maxHeight: '27%',
    top: '30%',
    left: '35%',
    borderRadius: '5px',
    minWidth: '200px',
    height: '250px'
  }
}

class App extends Component {  
  
  state = {
    launches: [],
  };
  

  componentDidMount() {      
    this.updateLaunchList()
  };

  updateLaunchList = () => {
    getLaunches()
      .then((launches) => {
        this.setState((state) => ({
          launches:launches,
        } ))
      })
  };

  isReadMore = (value) => {
    this.setState((state) => ({
      isReadMore: state + value,
    }) )
  };
  

  render() {
    console.log(this.state)    
    return (
      <div className="App">
      <button className='btn btn-default add-book-button'
      onClick={this.addBookModal}/>      
      <Modal
      style={deleteModalStyle}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>this.toggleDeleteModal()}
      isOpen={!!this.state.isDeleteModal}>
      <h1>Are you sure?</h1> 
      <button className='btn btn-danger'
      style={{marginRight: '4px'}}
      onClick={this.deleteBook}>
      Delete
      </button>
      <button className='btn btn-default'
      onClick={()=>this.toggleDeleteModal()}>Cancel</button>
      </Modal>
      <ul className='book-tile-container'>{
        this.state.launches.map(({flight_number, details, rocket, launch_success, }) =>(
          <li key={flight_number} className='book-tile'>            
            <p>
              {details}
              {flight_number} 
              {rocket.rocket_name} 
              {launch_success ? 'successful launch' : null}  
              {launch_success === false ?  'failed launch :(' : null}
              {launch_success === null ? 'still waiting' : null}
              <a onClick={this.isReadMore(flight_number)} style={{color: 'blue'}}>Read more...</a>
            </p>
            
          </li>          
        </ul>
        
</div>
          
        ) ) 
      };
    )
  }; 
};


export default App;
