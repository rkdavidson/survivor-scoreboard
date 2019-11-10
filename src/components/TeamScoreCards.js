import React from 'react';
import PlayerCardSmall from '../components/PlayerCardSmall';

const rankingStrings = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

export default function TeamScoreCards(props) {
  const { owner, members, totalPoints, standing } = props;

  return (
    <section className="mb-12">
      {/* Team Title */}
      <div>
        <div className="flex justify-between items-end mb-8 pt-3">
          <h2 className="text-3xl font-black leading-none">
            {standing === 1 ? (
              <span role="img" aria-label="1st place" className="block text-2xl font-bold text-gray-600">
                👑
              </span>
            ) : (
                <span role="img" aria-label={`${standing} place`} className="block text-base font-bold text-gray-600">
                  {`${rankingStrings[standing]} place`}
                </span>
              )}
            {owner}
          </h2>
          <span className="inline-block rounded-full px-3 py-1 mr-2 bg-yellow-300 text-lg font-semibold text-yellow-900">
            {totalPoints} pts
          </span>
        </div>
      </div>

      {/* Team Players */}
      <div className="flex -mx-2 mb-6">
        <PlayerCardSmall player={members[0]} />
        <PlayerCardSmall player={members[1]} />
      </div>
      <div className="flex -mx-2">
        <PlayerCardSmall player={members[2]} />
        <PlayerCardSmall player={members[3]} />
      </div>
    </section>
  );
}
