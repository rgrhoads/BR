import React, { useContext } from 'react';
import Context from './Context.jsx'

const Player = ({ user }) => {
  const context = useContext(Context);

  return(
    <div className="user-block">
      <div className="columns">{user.username}</div>
      <div className="columns">{user.platform}</div>
      <div className="columns">{user.kills}</div>
      <div className="columns">{user.rank}</div>
      <div className="columns">{user.level}</div>
    </div>
  );
}

export default Player;