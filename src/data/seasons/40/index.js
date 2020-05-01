import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode12';
import homeGame from './games/home/home12';
import workGame from './games/work/work12';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};