import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Nav from './Nav.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "TEST!!!",
    }
  }

  render() {
    return(
      <div>
        <h1>Bragging Rights</h1>
        <Nav />
      </div>
    )
  }
}

export default App;