import React from 'react';
import PlayerCardSmall from '../components/PlayerCardSmall';
import { ReactComponent as Trophy } from '../components/zondicons/trophy.svg';

const rankingStrings = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

export default function TeamScoreCards(props) {
  const { owner, members, totalPoints, standing } = props;

  return (
    <section className="pb-2 mb-12 shadow-lg bg-gray-100">
      {/* Team Title */}
      <div className="flex justify-between items-center mb-6 py-6 pl-8 pr-4 bg-white shadow">
        <h2 className="text-3xl font-black leading-none text-teal-900">
          {standing === 1 ? (
            <span className="flex text-base font-bold text-teal-600 align-center items-center">
              <Trophy className="inline-block w-4 h-4 fill-current text-orange-400 mr-1" /> 1st
            </span>
          ) : (
              <span role="img" aria-label={rankingStrings[standing]} className="block text-base font-bold text-blue-600">
                {rankingStrings[standing]}
              </span>
            )}
          {owner}
        </h2>
        <span className="inline-block rounded-full px-4 py-1 mr-2 text-xl text-orange-900 bg-yellow-300 tracking-tight">
          {totalPoints} pts
          </span>
      </div>

      {/* Team Players */}
      <section className="px-4">
        <div className="flex flex-wrap -mx-2">
          <PlayerCardSmall player={members[0]} />
          <PlayerCardSmall player={members[1]} />
          <PlayerCardSmall player={members[2]} />
          <PlayerCardSmall player={members[3]} />
        </div>
      </section>
    </section>
  );
}
