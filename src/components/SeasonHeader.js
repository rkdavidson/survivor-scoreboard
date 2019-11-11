import React from 'react';

function SeasonHeader({ season }) {
  return (
    <section className="flex justify-start p-4 py-6 mb-6 bg-blue-800 shadow-lg">
      <div>
        <img src="images/season-logo.png" className="w-20" />
      </div>

      {/* Season info */}
      <div className="flex items-center px-4">
        <p className="text-sm leading-tight font-bold text-blue-200">
          {`Season ${season.number}`}&ensp;&bull;&ensp;{`${season.displayDate}`}
          <br />
          <span className="text-xl font-extrabold text-blue-100">
            {season.name}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SeasonHeader