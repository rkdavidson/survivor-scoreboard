import React from 'react';
import { useHistory } from 'react-router-dom';

import PlayerFireStatus from './PlayerFireStatus';
import { TribeNameSmall } from './TribeName';

const outPlayerPhotoStyle = {
  opacity: 0.8,
  filter: 'grayscale(100%) contrast(65%) brightness(115%)',
  userSelect: 'none'
};

function PlayerCardSmall(props) {
  const {
    id,
    profile: { firstName, lastName, age, occupation, currentResidence, hometown },
    currentTribe,
    hasFire,
    hiddenIdols,
    points
  } = props.player;
  let history = useHistory();

  function handleClick() {
    history.push(`/player/${id}`);
  }

  return (
    <div className={`w-1/2 px-2 mb-6 relative ${hasFire ? undefined : 'opacity-75'}`} onClick={handleClick}>
      <div
        className="rounded-lg overflow-hidden shadow-md bg-white border-2 border-gray-400"
        style={hasFire ? { borderColor: currentTribe.colors.light } : undefined}
      >
        {/* Photo */}
        <img
          className="object-cover object-top h-40 w-full"
          src={`${process.env.PUBLIC_URL}/images/cast/${firstName}-${lastName}.jpg`}
          alt={`${firstName} ${lastName}`}
          style={!hasFire ? outPlayerPhotoStyle : undefined}
        />

        <PlayerFireStatus
          className={'absolute top-0 right-0'}
          hasFire={hasFire}
          points={points}
        />

        {/* Player Details */}
        <div className={`p-2 pb-3 ${hasFire ? 'bg-white' : 'bg-gray-100'}`}>
          <div className="flex justify-between content-center items-center">
            <p className={`text-lg font-semibold`}>
              {firstName} {'🗿'.repeat(hiddenIdols)}
            </p>
            <TribeNameSmall tribe={currentTribe} />
          </div>
          <p className="text-xs font-medium text-gray-700 mt-2 hidden">
            <span className="font-bold">Age</span> <span>{age}</span><br />
            <span>{occupation}</span><br />
            <span>{currentResidence}</span><br />
          </p>
        </div>
      </div>
    </div >
  );
}

export default PlayerCardSmall;