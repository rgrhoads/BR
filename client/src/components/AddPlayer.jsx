import React, { useState, useContext } from 'react';
import axios from 'axios';
import Context from './Context.jsx'

const AddPlayer = (props) => {
  const context = useContext(Context);
  const [user, setUser] = useState('');
  const [platform, setPlatform] = useState('origin');

  const submitUser = () => {
    console.log('submitting user and platform: ', user)
    console.log('submitting platform: ', platform)
    axios.get(`/apex/${platform}/${user}`)
      .then( context.getUsers() )
      .catch((err) => console.log('ERROR: ', err));
  }

  return(
    <div className="add-player">
      <div className="player-form">
        <label id="platform">
          Platform:
          <select
            className="platform-input"
            onChange={ (e) => setPlatform(e.target.value) }
          >
            <option className="option-pc" value={'origin'}>Origin</option>
            <option className="option-xbl" value={'xbl'}>XBL</option>
            <option className="option-psn" value={'psn'}>PSN</option>
          </select>
        </label>
        <label id="user">
          Username:
          <input
            className="username-input"
            type="text"
            name="firstname"
            placeholder="Enter username here... "
            onChange={(e) => { setUser(e.target.value); } }
          />
        </label>
      </div>
      <input
        className="add-player-button"
        type="button"
        value="Add Player"
        onClick={() => submitUser()}
      />
    </div>
  );
}

export default AddPlayer;