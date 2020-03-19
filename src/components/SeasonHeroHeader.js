import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../components/zondicons/home.svg';
import { ReactComponent as ComputerLaptop } from '../components/zondicons/computer-laptop.svg';

const iconMap = {
  'Home': Home,
  'ComputerLaptop': ComputerLaptop
};

function SeasonHeroHeader({ seasonDetails, games, currentGameId, onChangeGame }) {
  const { number, name } = seasonDetails;

  return (
    <section className="">
      <Link to="/">
        <img className="w-full" src={`${process.env.PUBLIC_URL}/images/${number}/masthead.jpg`} alt="S39" />
      </Link>

      {/* Season info */}
      <div className="px-2" style={{ backgroundColor: 'rgb(21, 30, 38)' }}>
        {/* HIDDEN TEMPORARILY */}
        <div className="pt-6 hidden">
          <p className="text-sm text-center leading-tight tracking-wide font-bold text-blue-200">
            {`SEASON ${number}`}
            <br />
            <span className="text-lg font-extrabold text-white">
              {`${name}`}
            </span>
          </p>
        </div>
        <div className="flex justify-between px-2 w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/4 m-auto">
          {games.map(game => {
            const isActive = game.id === currentGameId;
            const Icon = iconMap[game.icon];

            return (
              <button
                key={game.id}
                className={`text-sm text-center font-bold px-4 py-4 border-b-4 ${isActive ? 'text-blue-100 border-blue-200' : 'text-blue-400 border-transparent'}`}
                onClick={() => onChangeGame(game.id)}
              >
                <Icon className="inline-block w-6 h-6 mb-1 fill-current" />
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