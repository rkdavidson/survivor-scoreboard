import React from 'react';
import PlayerCardSmall from '../components/PlayerCardSmall';

const rankingStrings = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

export default function TeamScoreCards(props) {
  const { owner, members, totalPoints, standing } = props;

  const sortedMembers = members.sort((a, b) => {
    if (a.hasFire && b.hasFire) return 0;
    if (!a.hasFire && b.hasFire) return 1;
    if (a.hasFire && !b.hasFire) return -1;
  });
  return (
    <section className="mb-12">
      {/* Team Title */}
      <div>
        <div className="flex justify-between items-end mb-6 px-8 py-6 bg-blue-700 shadow-lg">
          <h2 className="text-3xl font-black leading-none text-gray-100">
            {standing === 1 ? (
              <span role="img" aria-label="1st place" className="block text-2xl font-bold">
                👑
              </span>
            ) : (
                <span role="img" aria-label={rankingStrings[standing]} className="block text-base font-bold text-blue-200">
                  {rankingStrings[standing]}
                </span>
              )}
            {owner}
          </h2>
          <span className="inline-block rounded-full px-4 py-1 mr-2 bg-yellow-200 text-xl font-semibold text-orange-600 shadow-sm">
            {totalPoints} pts
          </span>
        </div>
      </div>

      {/* Team Players */}
      <section className="px-4">
        <div className="flex -mx-2 mb-6 ">
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
