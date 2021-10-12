import React from 'react';

const Nav = (props) => {

  return(
    <div className="nav-bar flex-container">
      <div className="nav-bar-widget">HOME</div>
      <div className="nav-bar-widget">LEADERBOARDS</div>
      <div className="nav-bar-widget">COMMUNITY</div>
      <div className="nav-bar-widget">FORUMS</div>
      <div className="nav-bar-widget">PROFILE</div>
    </div>
  );
}

export default Nav;