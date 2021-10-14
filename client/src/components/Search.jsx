import React from 'react';

const Search = (props) => {

  return(
    <div className="search">
      <input type="text" placeholder="Enter username..." />
      <input type="button" value="Search" />
    </div>
  );
}

export default Search;