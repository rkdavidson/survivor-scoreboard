import season from './season';
import cast from './cast';

// ⭐ Things that change every week
import episode from './episodes/episode01';
import homeGame from './games/home/home01';

export default {
  season,
  cast,
  games: [homeGame],
  episode,
};