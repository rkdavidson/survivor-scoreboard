import React from 'react';

const outPlayerPhotoStyle = {
  opacity: 0.8,
  filter: 'saturate(10%) contrast(70%) brightness(110%)',
  userSelect: 'none'
};

function PlayerCardSmall(props) {
  const {
    id,
    profile: { firstName, lastName, age, occupation, currentResidence, hometown },
    currentTribe,
    hasFire,
    hiddenIdols,
    points,
  } = props.player;

  return (
    <div className="w-1/2 px-2 relative">
      <div className="rounded overflow-hidden shadow-lg bg-white" style={{ borderColor: currentTribe.colors.light, borderWidth: '4px' }}>
        {/* Photo */}
        <img
          className="object-cover object-top h-40 w-full"
          src={`images/cast/${firstName}-${lastName}.jpg`}
          alt={`${firstName} ${lastName}`}
          style={!hasFire ? outPlayerPhotoStyle : undefined}
        />

        {/* Status Indicator */}
        <div className={`absolute top-0 right-0 w-${hasFire ? '8' : '12'} h-8 flex justify-center items-center content-center -mt-3 -mr-1 rounded-full bg-orange-100 shadow-sm`} >
          {hasFire && (
            <span className="text-lg font-bold text-center tracking-tighter">
              {'🔥'}
            </span>
          )}
          {!hasFire && (
            <span className="text-sm font-medium text-gray-900 text-center tracking-tighter">
              {points} pts
            </span>
          )}
        </div>

        {/* Player Details */}
        <div className={`p-2 pb-3 ${hasFire ? 'bg-white' : 'bg-gray-100'}`}>
          <div className="flex justify-between content-center items-center mb-2">
            <p className="text-lg font-bold">{firstName} {'🗿'.repeat(hiddenIdols)}</p>
            {/*<p className="text-lg font-bold leading-none">
              <span className="rounded text-xs px-2 py-0 font-medium" style={{
                'background': currentTribe.colors.light,
                'color': currentTribe.colors.dark
              }}>
                {currentTribe.name}
              </span>
            </p>*/}
          </div>
          <p className="text-xs font-medium text-gray-700">
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