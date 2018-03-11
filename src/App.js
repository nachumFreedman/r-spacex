import React, { Component } from 'react';
import './App.css';
import  api  from './api';
import Modal from 'react-modal';

const { getLaunches, getRockets  } = api;

const modalStyle = {
  display: 'flex',
  maxWidth: '30%',
  maxHeight: '15%',
  top: '30%',
  left: '35%',
  borderRadius: '5px',
  maxWidth: '200px',
  height: '250px',
  ocacity: 1,
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

  setReadMoreFlight = (flight_number) => {

    const currentLaunch = this.state.launches.find(
      (launch) => launch.flight_number === flight_number)

    const currentRocket = currentLaunch ? this.state.rockets.find(
      (rocket) => rocket.name === currentLaunch.rocket.rocket_name) : null

    this.setState((state) => ({
      readMoreFlight: flight_number || false, 
      currentLaunch,
      currentRocket      
    }) )
  };
  

  render() {
    console.log(this.state)    
    return (      
      <div className="App">
        
        {
          this.state.readMoreFlight &&
          (
            <Modal
              style={this.modalStyle}
              shouldCloseOnOverlayClick={true}
              onRequestClose={()=>this.setReadMoreFlight()}
              isOpen={!!this.setReadMoreFlight}>
              <div>

                <h2>{this.state.currentRocket.name}</h2>
                <div>({this.state.currentRocket.id})</div>
                <img src={this.state.currentLaunch.links.mission_patch} alt='' style={{maxHeight: '100px'}}/>
                <div>Launch site {this.state.currentLaunch.launch_site.site_name}</div>
                <p>
                  {this.state.currentLaunch.details}.
                </p>
                <p>
                  This rocket weighs {this.state.currentRocket.mass.kg}Kg,
                  It has {this.state.currentRocket.stages} stages and is {this.state.currentRocket.height.feet} Feet tall
                </p>
                <p>{this.state.currentRocket.description}</p>
                <button className='btn btn-default'
                        onClick={()=>this.setReadMoreFlight()}>Close</button>
              </div>
            </Modal>
          )              
        }
      
      <ul className='book-tile-container'>

        {
          this.state.launches.map(({flight_number, details, rocket, launch_success, launch_site, launch_date_unix}) =>(
            <li key={flight_number} className='launch-tile'>            

              <div className='app-launches-paragraph'>
                <h2>{rocket.rocket_name}</h2> 
                <h3>
                  {launch_success ? 'Successful launch!' : null}  
                  {launch_success === false ?  'Failed launch' : null}
                  {launch_success === null ? 'Still waiting' : null}
                </h3>
                <p>Launch time {new Date(launch_date_unix * 1000).toString()}</p>
                <a onClick={
                  ()=>this.setReadMoreFlight(flight_number)}
                   className='app-launches-readmore-button'>Read more...</a>
              </div>
              <div>
                Launch number {flight_number} 
              </div>
            </li>          
          ))
        }
        
      </ul>          
      </div>          
    );  
  } 
};

export default App;
