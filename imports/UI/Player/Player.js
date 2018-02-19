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
      <div key={this.props.player._id} className="item">
        <div className="player">
          <div>
            <h3 className="player__name"> {this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.rank +
                ' ' +
                this.props.player.position +
                ' ' +
                this.props.player.score}
              point(s).
            </p>
          </div>
          <div className="player__actions">
            <button
              className="button button--round"
              onClick={() => this.updateScore(this.props.player._id, 1)}
            >
              +1
            </button>
            <button
              className="button button--round"
              onClick={() => this.updateScore(this.props.player._id, -1)}
            >
              -1
            </button>
            <button
              className="button button--round"
              onClick={() => this.removePlayer(this.props.player._id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

Player.propTypes = {
  player: PropTypes.object.isRequired
};
