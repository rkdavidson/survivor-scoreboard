import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode10';
import homeGame from './games/home/home10';
import workGame from './games/work/work10';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};