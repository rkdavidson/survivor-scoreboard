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
import getSeasonData from './data/getSeasonData';
const season39 = getSeasonData('s39');
console.log('season39: ', season39);
// import SeasonData from './data/SeasonData';
const { details, cast, tribes, games } = season39;

function App() {
  return (
    <Router basename="survivor-scoreboard">
      <SeasonHeroHeader season={season39} />
      {/* <SeasonHeader season={season} /> */}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/player/:playerId">
          <PlayerBio cast={cast} />
        </Route>
        <Route path={['/', '/scores']}>
          <ScoresDashboard
            season={season39}
            tribes={tribes}
            cast={cast}
            ourGame={games[0]}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
