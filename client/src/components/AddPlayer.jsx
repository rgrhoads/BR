import React from 'react';

const AddPlayer = (props) => {

  return(
    <div className="add-player">
      <div>
        <select>
          <option className="option-pc" value={'PC'}>PC</option>
          <option className="option-xbl" value={'XBL'}>XBL</option>
          <option className="option-psn" value={'PSN'}>PSN</option>
        </select>
        <label>
          SteamID:
          <input
            type="text"
            name="firstname"
            onChange={(e) => { this.updateFirstName(e.target.value); } }
          />
        </label>
      </div>
      <input className="add-player-button" type="button" value="Add Player" />
    </div>
  );
}

export default AddPlayer;