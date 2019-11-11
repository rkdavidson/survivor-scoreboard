import seasonData from './season-39.json';

const { season, tribes, ourGame } = seasonData;
let { cast } = seasonData;

// Utils
// -----------------------------------------------------------------
function normalizeTribes(players, tribes) {
  return players.map(player => ({
    ...player,
    currentTribe: tribes.find(tribe => tribe.id === player.currentTribe)
  }));
}

function normalizePlayers(players, cast, tribes) {
  return players.map(playerId => cast.find(p => p.id === playerId));
}

// Process Data
// -----------------------------------------------------------------

// Replace references to tribeIds with tribe data
cast = [...normalizeTribes(cast, tribes)];

// Rank teams by current points, and sort Bench team to end
const teamsRanked = [...ourGame.teams].sort((a, b) => b.totalPoints - a.totalPoints);
const theBenchTeam = teamsRanked.find(team => team.id === "bench");
ourGame.teams = [...teamsRanked.filter((team => team.id !== "bench")), theBenchTeam];
ourGame.teams = ourGame.teams.map(team => ({
  ...team,
  members: normalizePlayers(team.members, cast, tribes).sort((a, b) => {
    // Sort members in the game first
    if (a.hasFire && b.hasFire) return 0;
    if (!a.hasFire && b.hasFire) return 1;
    if (a.hasFire && !b.hasFire) return -1;

    // Both members are out of the game
    return (a.points > b.points) ? -1 : 1;
  })
}));

// Return processed data
export default {
  season,
  cast,
  tribes,
  ourGame,
}