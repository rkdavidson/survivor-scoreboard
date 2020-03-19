import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode06';
import homeGame from './games/home/home06';
import workGame from './games/work/work06';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};