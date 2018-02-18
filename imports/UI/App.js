import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import AddPlayer from './AddPlayer/AddPlayer';
import PlayerList from './PlayerList/PlayerList';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} />
        <PlayerList players={this.props.players} />
        <AddPlayer score={0} />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
