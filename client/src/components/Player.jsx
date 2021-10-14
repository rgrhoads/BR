import React, { useContext } from 'react';
import Context from './Context.jsx'

const Player = ({ user }) => {
  const context = useContext(Context);
  console.log('USER: ', user);
  return(
    <div className="user-block">
      <div className="columns">{user.username}</div>
      <div className="columns">{user.platform}</div>
      <div className="columns">{user.kills}</div>
      <div className="columns">{user.player_rank}</div>
      <div className="columns">{user.player_level}</div>
    </div>
  );
}

export default Player;