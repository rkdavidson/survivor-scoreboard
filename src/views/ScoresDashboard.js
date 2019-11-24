import React, { useState } from 'react';

import { ReactComponent as ColumnIcon } from '../components/zondicons/view-column.svg';
import { ReactComponent as TileIcon } from '../components/zondicons/view-tile.svg';
import TeamScoreCards from '../components/TeamScoreCards';

// -----------------------------------------------------------------

function ScoresDashboard(props) {
  const { season, cast, tribes, game } = props;
  const [layout, setLayout] = useState('column');

  function handleChangeLayout(event) {
    setLayout(layout === 'tile' ? 'column' : 'tile');
  }

  const IconComponent = layout === 'tile' ? ColumnIcon : TileIcon;

  return (
    <section className="container mx-auto pb-4">
      <div className="px-6 py-4 flex justify-end items-center">
        <button className="text-center leading-relaxed" onClick={handleChangeLayout}>
          <span className="mr-3">View as</span>
          <IconComponent className="inline-block w-6 h-6 fill-current" />
        </button>
      </div>

      {game.teams.map((team, index) => {
        return (
          <TeamScoreCards
            key={team.id}
            totalPoints={team.totalPoints}
            owner={team.owner}
            members={team.members}
            standing={team.id === 'bench' ? 0 : index + 1}
            layout={layout}
          />
        );
      })}
    </section >
  );
}

export default ScoresDashboard;
