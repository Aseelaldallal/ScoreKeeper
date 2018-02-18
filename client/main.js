import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import TitleBar from '../imports/UI/TitleBar/TitleBar';
import AddPlayer from '../imports/UI/AddPlayer/AddPlayer';

// Tracker.autorun: Takes a set of functions, monitors the queries run inside the functions.
// When query changes, it reruns the function.

// Startup: Wait for the DOM to load
Meteor.startup(() => {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <TitleBar title="Score Keep" subtitle="Subtitle" />
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <AddPlayer />
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});

renderPlayers = players => {
  return players.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} points.
        <button onClick={() => updateScore(player._id, 1)}>+1 </button>
        <button onClick={() => updateScore(player._id, -1)}>-1</button>
        <button onClick={() => removePlayer(player._id)}>X</button>
      </p>
    );
  });
};

removePlayer = playerID => {
  Players.remove({ _id: playerID });
};

updateScore = (playerID, value) => {
  Players.update(playerID, { $inc: { score: value } });
};

handleSubmit = e => {
  e.preventDefault();
  let playerName = e.target.playerName.value;
  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};
