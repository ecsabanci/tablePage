import React, { Component } from 'react';
import './scss/styles.scss';

import Users  from "./components/Users";

class App extends Component {  

  render() {
    return (
      <div className="List">
        <Users />
        
      </div>
    )
  }
}

export default App;