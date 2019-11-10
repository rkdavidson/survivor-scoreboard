import React from 'react';

import TeamScoreCards from '../components/TeamScoreCards';

// Utils
function normalizePlayers(players, cast, tribes) {
  return players.map(playerId => {
    const player = cast.find(p => p.id === playerId);

    return {
      ...player,
      currentTribe: tribes.find(tribe => tribe.id === player.currentTribe)
    };
  });
}

// -----------------------------------------------------------------

function ScoresDashboard(props) {
  const { season, cast, tribes, ourGame } = props;

  const teamsRanked = [...ourGame.teams].sort((a, b) => b.totalPoints - a.totalPoints);
  const theBenchTeam = teamsRanked.find(team => team.id === "bench");
  const teams = [...teamsRanked.filter((team => team.id !== "bench")), theBenchTeam];

  return (
    <div className="container mx-auto pt-8 pb-4">
      {teams.map((team, index) => {
        const members = normalizePlayers(team.members, cast, tribes);

        return (
          <TeamScoreCards
            key={team.id}
            totalPoints={team.totalPoints}
            owner={team.owner}
            members={members}
            standing={team.id === 'bench' ? 0 : index + 1}
          />
        );
      })}
    </div >
  );
}

export default ScoresDashboard;
