import React, { useState } from 'react';
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
import { getSeason39Data, getSeasonData } from './data/getSeasonData';
const season39 = getSeason39Data('s39');
console.log('season39: ', season39);

const season40 = getSeasonData('s40');
console.log('season40: ', season40);

const { details, cast, tribes, games } = season40;

const developmentMode = window.location.hostname === 'localhost';

function App() {
  const [gameId, setGameId] = useState(season40.games[0].id);

  const game = games.find(({ id }) => id === gameId);

  return (
    <Router basename={developmentMode ? undefined : "survivor-scoreboard"}>
      <SeasonHeroHeader
        seasonDetails={details}
        games={games}
        currentGameId={gameId}
        onChangeGame={setGameId}
      />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/player/:playerId">
          <PlayerBio cast={cast} />
        </Route>
        <Route path="/">
          <ScoresDashboard
            season={season40}
            tribes={tribes}
            cast={cast}
            game={game}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
