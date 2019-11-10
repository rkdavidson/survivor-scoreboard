import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './global.css';
import './index.css';

import seasonData from './season-39.json';

import ScoresDashboard from './views/ScoresDashboard';

const {
  season,
  tribes,
  cast,
  ourGame,
} = seasonData;

function App() {
  return (
    <Router>
      <div>
        <div>
          <img src="images/statues.jpg" />
          {/* <img src="images/season-logo.png" className="h-32" /> */}
        </div>

        {/* Season info */}
        <div className="mb-2 px-8 py-6 bg-blue-700">
          <p className="text-md leading-tight font-bold text-blue-300">
            {`Season ${season.number} • ${season.displayDate}`}
            <br />
            <span className="text-3xl font-extrabold text-gray-200">
              {season.name}
            </span>
          </p>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/users">
            <h2>Users</h2>
          </Route>
          <Route path="/">
            <ScoresDashboard
              season={season}
              tribes={tribes}
              cast={cast}
              ourGame={ourGame}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
