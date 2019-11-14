import React from 'react';

function PlayerFireStatus({ style, className, hasFire, points = null }) {

  return (
    <div className={[
      `h-8 flex justify-center items-center content-center -mt-3 rounded-full bg-white shadow`,
      hasFire ? 'px-1 -mr-1' : 'px-2 mr-1',
      className
    ].join(' ')} style={style}>
      {hasFire && (
        <span className="text-xl font-bold text-center tracking-tighter">
          🔥
        </span>
      )}
      {!hasFire && (
        <span className="text-sm font-medium text-gray-900 text-center tracking-tighter">
          {points !== null ? `${points} pts` : '💨'}
        </span>
      )}
    </div>
  )
}

export default PlayerFireStatus;