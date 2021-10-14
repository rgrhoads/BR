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
      test: "TEST!!!",
      curr_game: 'Apex Legends',
      curr_user: 'Chowhawk',
      playerlist: [
        {
          platform: 'origin',
          username: 'ryan',
          level: 100,
          kills: 9001,
          rank: 'Platinum 1'
        },
        {
          platform: 'origin',
          username: 'caleb',
          level: 999,
          kills: 9999,
          rank: 'God Mode'
        }
      ],
    }
  }

  componentDidMount() {
    console.log('Retrieving Leaderboard...')
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