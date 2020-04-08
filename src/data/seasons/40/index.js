import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode08';
import homeGame from './games/home/home08';
import workGame from './games/work/work08';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};