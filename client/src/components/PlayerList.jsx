import React, { useContext } from 'react';
import Context from './Context.jsx';
import Player from './Player.jsx';

const PlayerList = (props) => {
  const context = useContext(Context);

  return(
    <div className="player-list">LEADERBOARD
      <div className="player-field">
        <div className="column-titles">
          <div className="columns">USERNAME</div>
          <div className="columns">PLATFORM</div>
          <div className="columns">KILLS</div>
          <div className="columns">RANK</div>
          <div className="columns">LEVEL</div>
        </div>
        {
          context.playerlist.map((user) => (
            <Player user={user} />
          ))
        }
      </div>
    </div>
  );
}

export default PlayerList;