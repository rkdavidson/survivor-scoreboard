import React from 'react';

const outPlayerPhotoStyle = {
  opacity: 0.8,
  filter: 'saturate(10%) contrast(70%) brightness(110%)'
};

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
      <div className="rounded overflow-hidden shadow-lg bg-white">
        <img
          className="object-cover h-44 w-full"
          src={`images/cast/${firstName}-${lastName}.jpg`}
          alt={`${firstName} ${lastName}`}
          style={!hasFire ? outPlayerPhotoStyle : undefined}
        />
        <div className={`flex justify-between p-2 pb-3 ${hasFire ? 'bg-white' : 'bg-gray-100'}`}>
          <p className="text-lg font-bold">{firstName}</p>
          <p className="text-lg font-bold">{hasFire ? '🔥' : '💨'}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerCardSmall;