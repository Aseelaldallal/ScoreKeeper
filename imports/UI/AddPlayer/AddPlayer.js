import React, { Component } from 'react';
import { Players } from '../../api/players';

class AddPlayer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let playerName = e.target.playerName.value;
    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="playerName" placeholder="Player name" />
        <button>Add Player</button>
      </form>
    );
  }
}

export default AddPlayer;
