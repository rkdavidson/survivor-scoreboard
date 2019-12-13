import { get } from 'lodash';
import seasons from './seasons';


// Utils
// -----------------------------------------------------------------

// Fancy way of resolving a reference by ID to an object in a collection
function createResolver(collection, field = null) {
  // Example use case... createResolver(['a', 'b', 'c'], [{ id: 'a', active: true }, { id: 'b', active: false }, { id: 'c', active: false }])
  if (!field) {
    return (parent) => collection.find(({ id }) => id === parent);
  }

  // Example use case, replacing an object's property reference with full object
  return (parent) => ({
    ...parent,
    [field]: collection.find(({ id }) => id === parent[field]),
  });
}

function sortActivePlayersFirst(a, b) {
  // Sort members in the game first
  if (a.hasFire && b.hasFire) return 0;
  if (!a.hasFire && b.hasFire) return 1;
  if (a.hasFire && !b.hasFire) return -1;

  // Both members are out of the game
  return (a.points > b.points) ? -1 : 1;
}

// Main
// -----------------------------------------------------------------

export default function getSeasonData(seasonId) {
  const seasonJson = get(seasons, seasonId, false);
  console.log('[ getSeasonData ] seasons:', seasons);

  if (!seasonJson) {
    throw new Error('Season not found');
  }

  // :: Get important data from the JSON file
  const { season: { details, tribes }, cast, games } = seasonJson;

  // :: Resolve relational references between the data, from bottom up

  // Cast & Tribes
  const resolvedCast = cast.map(createResolver(tribes, 'tribe'));
  const resolvedTribes = tribes.map((tribe) => ({
    ...tribe,
    members: resolvedCast.filter((player) => player.tribe.id === tribe.id)
  }));

  // Teams
  const resolveTeam = (team) => ({
    ...team,
    members: team.members.map(createResolver(resolvedCast)).sort(sortActivePlayersFirst)
  });
  const resolveTeams = (teams) => {
    // Resolve team properties, sort all teams, put the bench at the end
    const resolvedTeams = teams.map(resolveTeam).sort((a, b) => b.totalPoints - a.totalPoints);
    const benchTeam = resolvedTeams.find(({ id }) => id === "bench");
    const rankedTeams = resolvedTeams.filter(({ id }) => id !== "bench").concat([benchTeam]);

    return rankedTeams;
  };

  // Games
  const resolvedGames = games.map(game => ({
    ...game,
    teams: resolveTeams(game.teams),
  }));

  // :: Return final resolved data
  return {
    details,
    tribes: resolvedTribes,
    cast: resolvedCast,
    games: resolvedGames,
  }
}