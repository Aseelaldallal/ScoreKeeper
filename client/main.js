import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

// Tracker.autorun: Takes a set of functions, monitors the queries run inside the functions.
// When query changes, it reruns the function.

// Wait for the DOM to load
Meteor.startup(() => {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Aseel';
    let jsx = (
      <div>
        <h1> {title} </h1>
        <p>Hello {name}!</p>
        {renderPlayers(players)}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});

renderPlayers = players => {
  console.log('PLAYA: ', players);
  return players.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} points
      </p>
    );
  });
};
