import React from 'react';

function PlayerCardSmall(props) {
  const {
    id,
    profile: { firstName, lastName },
    hasFire,
    hiddenIdols,
    points
  } = props.player;

  return (
    <div className="w-1/2 px-2">
      <div className="rounded overflow-hidden shadow-lg bg-red-800">
        <img
          className="object-cover h-44 w-full"
          src={`images/cast/${firstName}-${lastName}.jpg`}
          alt={`${firstName} ${lastName}`}
        />
        <div className="p-2 pb-3 bg-white">
          <p className="text-lg font-bold">{firstName}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerCardSmall;