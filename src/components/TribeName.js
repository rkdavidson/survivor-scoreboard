import React from 'react';

export function TribeNameSmall({ tribe, showName = true }) {
  const { name, colors } = tribe;

  return (
    <p className="font-bold text-xs tracking-wide">
      <span className="rounded px-2" style={{
        background: colors.dark,
        color: colors.light,
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
      background: colors.dark,
      color: colors.light,
    }}>
      {name.toUpperCase()}
    </span>
  );
}

