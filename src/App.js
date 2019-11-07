import React from 'react';
import './global.css';
import './index.css';

import seasonData from './season-39.json';

import ScoresDashboard from './ScoresDashboard';

const {
  season,
  tribes,
  cast,
  ourGame,
} = seasonData;

function App() {
  return (
    <div>
      {/* <div>
        <img src="images/statues.jpg" />
      </div> */}

      {/* Season info */}
      <div className="mb-2 pt-6 pr-8 pl-8 pb-6 bg-blue-700">
        <p className="text-md leading-tight font-bold text-blue-300">
          {`Season ${season.number} • ${season.displayDate}`}
          <br />
          <span className="text-3xl font-extrabold text-gray-200">
            {season.name}
          </span>
        </p>
      </div>

      <ScoresDashboard
        season={season}
        tribes={tribes}
        cast={cast}
        ourGame={ourGame}
      />
      <pre>{JSON.stringify(seasonData, null, 2)}</pre>
    </div>
  );
}

export default App;
