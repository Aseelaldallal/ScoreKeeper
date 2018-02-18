import React, { Component } from 'react';
import Player from '../Player/Player';
import PropTypes from 'prop-types';

class PlayerList extends Component {
  renderPlayers = () => {
    return this.props.players.map(player => {
      return <Player key={player._id} player={player} />;
    });
  };

  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}

export default PlayerList;

PlayerList.PropTypes = {
  players: PropTypes.array.isRequired
};
