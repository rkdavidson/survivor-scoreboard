import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode11';
import homeGame from './games/home/home11';
import workGame from './games/work/work11';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};