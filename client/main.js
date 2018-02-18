import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import TitleBar from '../imports/UI/TitleBar/TitleBar';
import AddPlayer from '../imports/UI/AddPlayer/AddPlayer';
import Player from '../imports/UI/Player/Player';
import PlayerList from '../imports/UI/PlayerList/PlayerList';

// Tracker.autorun: Takes a set of functions, monitors the queries run inside the functions.
// When query changes, it reruns the function.

// Startup: Wait for the DOM to load
Meteor.startup(() => {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <TitleBar title="Score Keep" subtitle="Subtitle" />
        <PlayerList players={players} />
        <AddPlayer score={0} />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
