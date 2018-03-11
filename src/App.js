import React, { Component } from 'react';
import './App.css';
import  api  from './api';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import FaMagic from 'react-icons/lib/fa/magic';
import Modal from 'react-modal';
import UpdateBookModal from './UpdateBookModal'

const { getLaunches, getRockets  } = api;

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
    rockets: [],
    readMoreFlight: false,
  };
  

  componentDidMount() {      
    this.updateLaunchList();
    this.updateRocketList();
  };

  updateLaunchList = () => {
    getLaunches()
      .then((launches) => {
        this.setState((state) => ({
          launches:launches,
        } ))
      })
  };

  updateRocketList = () => {
    getRockets()
      .then((rockets) => {
        this.setState((state) => ({
          rockets: rockets,
        } ))
      })
  };

  setReadMoreFlight = (flight_number, details, launch_site, rocket) => {
    flight_number ? 
    this.setState((state) => ({
      readMoreFlight: flight_number, details, launch_site, rocket 
    }) ) : false
  };
  

  render() {
    console.log(this.state)    
    return (
      
      <div className="App">
        {
          this.state.readMoreFlight &&
          (
            <Modal
              style={this.deleteModalStyle}
              shouldCloseOnOverlayClick={true}
              onRequestClose={()=>this.setReadMoreFlight()}
              isOpen={!!this.state.readMoreFlight}>
              <h1>{this.state.readMoreFlight}</h1> 
              <button className='btn btn-default'
                      onClick={()=>this.setReadMoreFlight()}>close</button>
            </Modal>
          )              
        }
        
        <ul className='book-tile-container'>
          {
            this.state.launches.map(({flight_number, details, rocket, launch_success, launch_site,}) =>(
              <li key={flight_number} className='book-tile'>            
                <p>
                  {details}
                  {flight_number} 
                  {rocket.rocket_name} 
                  {launch_success ? 'successful launch' : null}  
                  {launch_success === false ?  'failed launch' : null}
                  {launch_success === null ? 'still waiting' : null}
                  <a onClick={
                    ()=>this.setReadMoreFlight(
                      flight_number, details, launch_site.name, rocket
                    )}
                     style={{color: 'blue'}}>Read more...</a>
                </p>
                
              </li>          
            ))
          }
        </ul>          
      </div>          
    );  
  } 
};

export default App;
