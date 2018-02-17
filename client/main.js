import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [
  {
    _id: '1',
    name: 'Aseel',
    score: 99
  },
  {
    _id: '2',
    name: 'Mo',
    score: 22
  },
  {
    _id: '3',
    name: 'Hadeel',
    score: 44
  }
];

renderPlayers = () => {
  return players.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} points
      </p>
    );
  });
};

// Wait for the DOM to load
Meteor.startup(() => {
  let title = 'Score Keep';
  let name = 'Aseel';
  let jsx = (
    <div>
      <h1> {title} </h1>
      <p>Hello {name}!</p>
      {renderPlayers()}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
