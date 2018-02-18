import React, { Component } from 'react';
import { Players } from '../../api/players';
import PropTypes from 'prop-types';

class Player extends Component {
  removePlayer = playerID => {
    Players.remove({ _id: playerID });
  };

  updateScore = (playerID, value) => {
    Players.update(playerID, { $inc: { score: value } });
  };

  render() {
    return (
      <p key={this.props.player._id}>
        {this.props.player.name} has {this.props.player.score} points.
        <button onClick={() => this.updateScore(this.props.player._id, 1)}>
          +1
        </button>
        <button onClick={() => this.updateScore(this.props.player._id, -1)}>
          -1
        </button>
        <button onClick={() => this.removePlayer(this.props.player._id)}>
          X
        </button>
      </p>
    );
  }
}

export default Player;

Player.propTypes = {
  player: PropTypes.object.isRequired
};
