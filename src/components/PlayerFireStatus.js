import React from 'react';
import { ReactComponent as FireIcon } from '../components/zondicons/hot.svg';

function PlayerFireStatus({ style, className, hasFire, points = null }) {

  return (
    <div className={[
      `flex justify-center items-center content-center -mt-4 rounded-full bg-white shadow`,
      hasFire ? 'p-1 -mr-1' : 'h-6 px-2 mr-1',
      className
    ].join(' ')} style={style}>
      {hasFire && (
        <FireIcon className="inline-block w-4 h-4 text-orange-400 fill-current" />
        // <span className="text-lg font-bold text-center tracking-tighter">
        //   🔥
        // </span>
      )}
      {!hasFire && (
        <span className="text-xs font-medium text-gray-900 text-center tracking-tighter">
          {points !== null ? `${points} pts` : '💨'}
        </span>
      )}
    </div>
  )
}

export default PlayerFireStatus;