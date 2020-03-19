import React, { useState } from 'react';

import { ReactComponent as ColumnIcon } from '../components/zondicons/view-column.svg';
import { ReactComponent as TileIcon } from '../components/zondicons/view-tile.svg';
import TeamScoreCards from '../components/TeamScoreCards';
import { ReactComponent as CalendarIcon } from '../components/zondicons/calendar.svg';

// -----------------------------------------------------------------

function ScoresDashboard(props) {
  const { season, cast, tribes, game } = props;

  return (
    <section className="container mx-auto pb-4 max-w-2xl">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="flex flex-row items-center">
          <CalendarIcon className="inline-block w-4 h-4 mr-2 fill-current" />
          <p className="text-xs leading-tight">
            {`Last updated on `}
            <span className="font-bold">
              {season.details.lastUpdated}
            </span>
          </p>
        </div>
      </div>

      {game.teams.map((team, index) => {
        return (
          <TeamScoreCards
            key={team.id}
            totalPoints={team.totalPoints}
            owner={team.owner}
            members={team.members}
            standing={team.id === 'bench' ? 0 : index + 1}
          />
        );
      })}
    </section >
  );
}

export default ScoresDashboard;
