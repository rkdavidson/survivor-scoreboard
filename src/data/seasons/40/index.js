import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode09';
import homeGame from './games/home/home09';
import workGame from './games/work/work09';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};