import React from 'react';

function PlayerFireStatus({ className, hasFire, points = null }) {

  return (
    <div className={[
      `h-8 flex justify-center items-center content-center -mt-3 rounded-full bg-white`,
      hasFire ? 'w-8 -mr-1' : 'px-4 mr-1',
      className
    ].join(' ')} >
      {hasFire && (
        <span className="text-lg font-bold text-center tracking-tighter">
          {'🔥'}
        </span>
      )}
      {!hasFire && (
        <span className="text-sm font-medium text-gray-900 text-center">
          {points !== null ? `${points} pts` : '💨'}
        </span>
      )}
    </div>
  )
}

export default PlayerFireStatus;