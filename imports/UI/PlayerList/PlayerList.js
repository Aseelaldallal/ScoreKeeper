import React, { Component } from 'react';
import Player from '../Player/Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

class PlayerList extends Component {
  renderPlayers = () => {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">
            Add your first player to get started!{' '}
          </p>
        </div>
      );
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player} />;
      });
    }
  };

  render() {
    return (
      <div>
        <FlipMove
          maintainContainerHeight={true}
          duration={750}
          easing="ease-out"
        >
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

export default PlayerList;

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
