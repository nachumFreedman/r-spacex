
export default {

  getLaunches: (launches) => {
    return fetch('https://api.spacexdata.com/v2/launches/all')
      .then(function(response) {
        return response.json();
      })
  },
  getRockets: (rockets) => {
    return fetch('https://api.spacexdata.com/v2/rockets')
      .then(function(response) {
        return response.json();
      })
  },
  
  
}

