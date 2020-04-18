import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CookiesProvider, useCookies } from 'react-cookie';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// Views
import AdminDashboard from './views/AdminDashboard';
import ScoresDashboard from './views/ScoresDashboard';
import PlayerBio from './views/PlayerBio';

// Components
import SeasonHeroHeader from './components/SeasonHeroHeader';

// Local
import './global.css';
import './index.css';

// Season Data
import { getSeason39Data, getSeasonData } from './data/getSeasonData';
const season39 = getSeason39Data('s39');
const season40 = getSeasonData('s40');
console.log('season39: ', season39);
console.log('season40: ', season40);

const { details, cast, tribes, games } = season40;
const developmentMode = window.location.hostname === 'localhost';

// Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

client
  .query({
    query: gql`
      {
        seasons {
          _id
          name
          number
        }
      }
    `
  })
  .then(result => console.log(result));

function App() {
  const [cookies, setCookie] = useCookies(['gameId']);
  const gameId = cookies.gameId || season40.games[0].id;
  const game = games.find(({ id }) => id === gameId);

  function handleChangeGame(newGameId) {
    setCookie('gameId', newGameId, { path: '/' });
  }

  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <Router basename={developmentMode ? undefined : "survivor-scoreboard"}>
          <SeasonHeroHeader
            seasonDetails={details}
            games={games}
            currentGameId={gameId}
            onChangeGame={handleChangeGame}
          />

          <Switch>
            <Route path="/admin">
              <AdminDashboard />
            </Route>
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
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default App;
