import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Context from './Context.jsx'

import Nav from './Nav.jsx';
import Search from './Search.jsx';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_game: 'Apex Legends',
      playerlist: [],
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get('/apex/users')
      .then((response) => {
        console.log(response);
        this.setState({
          playerlist: response.data
        })
      })
      .catch()
  }

  render() {
    return(
      <Context.Provider value={{
        game: this.state.curr_game,
        user: this.state.curr_user,
        playerlist: this.state.playerlist
      }}>
        <div className="main">
          <Nav />
          <Board />
        </div>
      </Context.Provider>
    )
  }
}

export default App;
