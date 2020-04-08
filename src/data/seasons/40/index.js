import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode07';
import homeGame from './games/home/home07';
import workGame from './games/work/work07';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};