import React from "react";
import { Link, useParams } from "react-router-dom";

import PlayerFireStatus from '../components/PlayerFireStatus';
import { TribeName } from '../components/TribeName';
import { ReactComponent as CheveronLeft } from '../components/zondicons/cheveron-left.svg';

function PlayerProfile({ player }) {
  const {
    id,
    profile: { firstName, lastName, age, occupation, currentResidence, hometown },
    tribe,
    hasFire,
    // hiddenIdols,
    points,
  } = player;

  const hiddenIdols = 2;

  const quickStats = {
    'Age': age,
    'Occupation': occupation,
    'Hometown': hometown,
    'Current Residence': currentResidence,
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl text-center font-black text-gray-800">
        {`${player.profile.firstName} ${player.profile.lastName}`}
      </h1>

      <div className="flex relative justify-center items-end m-auto w-3/4 mb-6">
        <img
          className="object-cover rounded-lg object-center shadow-lg border-4"
          src={`${process.env.PUBLIC_URL}/images/cast/${firstName}-${lastName}.jpg`}
          alt={`${firstName} ${lastName}`}
          style={{
            borderColor: tribe.colors.light
          }}
        />

        <PlayerFireStatus
          className={'absolute top-0 right-0'}
          hasFire={hasFire}
          points={points}
        />

        <TribeName className="absolute mt-3" tribe={tribe} />
      </div>

      <div className="mt-2 break-words text-md text-gray-800">
        {Object.entries(quickStats).map(([label, value]) => (
          <div key={label} className="flex justify-between content-center items-start mb-2 leading-tight">
            <span className="w-1/3 text-right pr-4 font-bold">{label}</span>
            <span className="w-2/3">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayerBio({ cast }) {
  const { playerId } = useParams();
  const player = cast.find(p => p.id === playerId);

  return (
    <section className="mt-4 px-4 pb-12">
      <Link to="/" className="text-teal-600 inline-flex align-center content-center">
        <CheveronLeft className="w-6 h-6 inline-block fill-current" /> Back
      </Link>
      <PlayerProfile player={player} />
    </section>
  );
}

export default PlayerBio;