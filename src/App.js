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
import SeasonHeroHeader from './components/SeasonHeroHeader';
import SeasonHeader from './components/SeasonHeader';

const {
  season,
  tribes,
  cast,
  ourGame,
} = seasonData;

function App() {
  return (
    <Router>
      {/* <SeasonHeroHeader season={season} /> */}
      <SeasonHeader season={season} />

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
    </Router >
  );
}

export default App;
