import React from 'react';
import PlayerCardSmall from '../components/PlayerCardSmall';

const rankingStrings = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

export default function TeamScoreCards(props) {
  const { owner, members, totalPoints, standing } = props;

  const sortedMembers = members.sort((a, b) => {
    // Sort members in the game first
    if (a.hasFire && b.hasFire) return 0;
    if (!a.hasFire && b.hasFire) return 1;
    if (a.hasFire && !b.hasFire) return -1;

    // Both members are out of the game
    return (a.points > b.points) ? -1 : 1;
  });
  return (
    <section className="pb-8 mb-12 shadow-lg bg-gray-100">
      {/* Team Title */}
      <div className="flex justify-between items-center mb-6 px-8 py-4 bg-white shadow">
        <h2 className="text-3xl font-black leading-tight text-blue-900">
          {standing === 1 ? (
            <span role="img" aria-label="1st place" className="block text-base font-bold text-blue-600">
              👑 1st
              </span>
          ) : (
              <span role="img" aria-label={rankingStrings[standing]} className="block text-base font-bold text-blue-600">
                {rankingStrings[standing]}
              </span>
            )}
          {owner}
        </h2>
        <span className="inline-block rounded-full px-4 py-1 mr-2 bg-yellow-200 text-xl font-semibold text-orange-600 shadow">
          {totalPoints} pts
          </span>
      </div>

      {/* Team Players */}
      <section className="px-4">
        <div className="flex -mx-2 mb-6">
          <PlayerCardSmall player={members[0]} />
          <PlayerCardSmall player={members[1]} />
        </div>
        <div className="flex -mx-2">
          <PlayerCardSmall player={members[2]} />
          <PlayerCardSmall player={members[3]} />
        </div>
      </section>
    </section>
  );
}
