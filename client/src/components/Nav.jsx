import React from 'react';
import Search from './Search.jsx';

const Nav = (props) => {

  return(
    <div className="nav-bar">
      <div className="nav-bar-logo">BRAGGING <br/> RIGHTS ™</div>
      <div id="lol" className="nav-bar-widget">League of Legends</div>
      <div id="sg" className="nav-bar-widget">Splitgate</div>
      <div id="cod" className="nav-bar-widget">Call of Duty: WZ</div>
    </div>
  );
}

export default Nav;