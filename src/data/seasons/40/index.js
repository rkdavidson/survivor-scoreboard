import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode05';
import homeGame from './games/home/home05';
import workGame from './games/work/work05';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};