import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode04';
import homeGame from './games/home/home04';
import workGame from './games/work/work04';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};