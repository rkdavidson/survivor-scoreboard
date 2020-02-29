import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode03';
import homeGame from './games/home/home03';
import workGame from './games/work/work03';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};