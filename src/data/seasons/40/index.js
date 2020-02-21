import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode02';
import homeGame from './games/home/home02';
import workGame from './games/work/work02';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};