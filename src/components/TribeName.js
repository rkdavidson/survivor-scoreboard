import React from 'react';

export function TribeNameSmall({ tribe, showName = true }) {
  const { name, colors } = tribe;

  return (
    <p className="text-lg font-bold leading-none">
      <span className="rounded text-xs px-2 font-bold tracking-wide" style={{
        background: colors.light,
        color: colors.dark,
      }}>
        {showName && name.toUpperCase()}
      </span>
    </p>
  );
}

export function TribeName({ className, tribe }) {
  const { name, colors } = tribe;

  return (
    <span className={`rounded px-4 py-1 mt-3 text-md font-bold tracking-widest shadow ${className}`} style={{
      background: colors.light,
      color: colors.dark,
    }}>
      {name.toUpperCase()}
    </span>
  );
}

