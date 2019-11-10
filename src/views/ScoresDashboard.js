import React from 'react';

import TeamScoreCards from '../components/TeamScoreCards';

// Utils
function normalizeMembers(members, cast) {
  return members.map(member => cast.find(m => m.id === member));
}

// -----------------------------------------------------------------

function ScoresDashboard(props) {
  const { season, cast, tribes, ourGame } = props;

  const teamsRanked = [...ourGame.teams].sort((a, b) => b.totalPoints - a.totalPoints);
  const theBenchTeam = teamsRanked.find(team => team.id === "bench");
  const teams = [...teamsRanked.filter((team => team.id !== "bench")), theBenchTeam];
  console.log('[chat] teams', teams);
  return (
    <div className="container mx-auto p-4 pt-8">
      {teams.map((team, index) => {
        const members = normalizeMembers(team.members, cast);

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
