import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Views
import ScoresDashboard from './views/ScoresDashboard';
import PlayerBio from './views/PlayerBio';

// Components
import SeasonHeroHeader from './components/SeasonHeroHeader';
import SeasonHeader from './components/SeasonHeader';

// Local
import './global.css';
import './index.css';

// Season Data
import SeasonData from './SeasonData';
const { season, cast, tribes, ourGame } = SeasonData;

function App() {
  return (
    <Router basename="survivor-scoreboard">
      <SeasonHeroHeader season={season} />
      {/* <SeasonHeader season={season} /> */}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/player/:playerId">
          <PlayerBio cast={cast} />
        </Route>
        <Route path={['/', '/scores']}>
          <ScoresDashboard
            season={season}
            tribes={tribes}
            cast={cast}
            ourGame={ourGame}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
