import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode13';
import homeGame from './games/home/home13';
import workGame from './games/work/work13';

export default {
  season,
  cast,
  games: [homeGame, workGame],
  episode,
};