import React, { useContext } from 'react';
import PlayerList from './PlayerList.jsx';
import AddPlayer from './AddPlayer.jsx';
import Context from './Context.jsx'

const Board = (props) => {
  const context = useContext(Context);

  return(
    <div className="board">
      <div className="game-title">{context.game}</div>
      <AddPlayer />
      <PlayerList />
    </div>
  );
}

export default Board;