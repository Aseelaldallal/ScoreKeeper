import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import App from '../imports/UI/App';

// Tracker.autorun: Takes a set of functions, monitors the queries run inside the functions.
// When query changes, it reruns the function.

// Startup: Wait for the DOM to load
Meteor.startup(() => {
  Tracker.autorun(function() {
    let players = Players.find({}, { sort: { score: -1 } }).fetch();
    let jsx = <App title="Score Keep" players={players} />;
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
