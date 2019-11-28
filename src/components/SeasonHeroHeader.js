import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../components/zondicons/home.svg';
import { ReactComponent as ComputerLaptop } from '../components/zondicons/computer-laptop.svg';

const iconMap = {
  'Home': Home,
  'ComputerLaptop': ComputerLaptop
};

function SeasonHeroHeader({ seasonDetails, games, currentGameId, onChangeGame }) {
  const { number, name, displayDate } = seasonDetails;

  return (
    <section className="">
      <Link to="/" className="lg:hidden">
        <img src={`${process.env.PUBLIC_URL}/images/masthead-3.jpg`} alt="S39" />
      </Link>

      {/* Season info */}
      <div className="px-2" style={{ backgroundColor: 'rgb(21, 30, 38)' }}>
        <p className="text-sm text-center leading-tight font-bold text-blue-200 hidden">
          {`Season ${number}`}&ensp;&bull;&ensp;{`${displayDate}`}
          <br />
          <span className="text-xl font-extrabold text-blue-100">
            {name}
          </span>
        </p>
        <div className="flex justify-between px-8 md:w-3/4 lg:w-1/2 xl:w-1/4 m-auto">
          {games.map(game => {
            const isActive = game.id === currentGameId;
            const Icon = iconMap[game.icon];

            return (
              <button
                key={game.id}
                className={`text-center font-bold px-4 py-4 border-b-4 ${isActive ? 'text-teal-200 border-blue-200' : 'text-teal-600 border-transparent'}`}
                onClick={() => onChangeGame(game.id)}
              >
                <Icon className="inline-block w-8 h-8 mb-1 fill-current" />
                <br />
                {game.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SeasonHeroHeader;