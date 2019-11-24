import React from 'react';

import TeamScoreCards from '../components/TeamScoreCards';

// -----------------------------------------------------------------

function ScoresDashboard(props) {
  const { season, cast, tribes, game } = props;

  return (
    <section className="container mx-auto pb-4">
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
    </section>
  );
}

export default ScoresDashboard;
