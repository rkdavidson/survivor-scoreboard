import React from 'react';

import PlayerFireStatus from './PlayerFireStatus';
import { TribeNameSmall } from './TribeName';
import { ReactComponent as BuoyIcon } from './zondicons/buoy.svg';
import { ReactComponent as CloseIcon } from './zondicons/close.svg';

const outPlayerPhotoStyle = {
  opacity: 0.85,
  filter: 'grayscale(100%) contrast(75%) brightness(125%)',
  userSelect: 'none'
};

function PlayerCircleCard(props) {
  const {
    id,
    firstName, lastName, occupation, currentResidence, hometown,
    tribe,
    hasFire,
    immunityIdols,
    fireTokens,
    onEdgeOfExtinction,
    points,
    onJury
  } = props.player;

  const borderColor = hasFire ? 'border-white' : 'border-white';

  return (
    <div className={`w-1/4 mb-4 relative shadow-md bg-white border-2 ${borderColor} ${hasFire ? undefined : 'opacity-75'}`}>
      <div className={`relative rounded-lg rounded-b-none overflow-hidden w-full pb-goldenratio`}>
        {/* Photo */}
        <img
          className="absolute object-cover object-top w-32 h-32"
          src={`${process.env.PUBLIC_URL}/images/40/cast/${id}.jpg`}
          alt={`${firstName} ${lastName}`}
          style={!hasFire ? outPlayerPhotoStyle : undefined}
        />
      </div>

      <PlayerFireStatus
        className={`absolute top-0 ${hasFire ? 'left-0' : 'right-0'} border-2 ${borderColor}`}
        hasFire={hasFire}
        onJury={onJury}
        points={points}
      />

      {/* Player Details */}
      <div className={`p-2 pb-3 text-center`}>
        <p className={`font-black text-md`}>
          {firstName}
        </p>
        <TribeNameSmall tribe={tribe} />

        {onJury && (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current inline-block ml-1 text-orange-900" viewBox="0 0 1792 1792">
            <path d="M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z" />
          </svg>
        )}
        <p className="flex justify-center items-center h4 my-1 text-sm font-bold leading-none">
          {fireTokens}
          <BuoyIcon className="w-3 h-3 ml-1 inline-block fill-current text-gray-800" />
        </p>
        {(hasFire && immunityIdols >= 1) && (
          <p>
            {`🗿`.repeat(immunityIdols)}
          </p>
        )}
      </div>
    </div>
  );
}

export default PlayerCircleCard;