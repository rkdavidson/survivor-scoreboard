import React from 'react';

function SeasonHeroHeader({ season }) {
  return (
    <section>
      <div>
        <img src="images/masthead-2.jpg" />
      </div>

      {/* Season info */}
      <div className="mb-2 px-8 pt-4 pb-6" style={{ backgroundColor: 'rgb(21, 20, 28)' }}>
        <p className="text-md text-center leading-tight font-bold text-blue-200">
          {`Season ${season.number}`}&ensp;&bull;&ensp;{`${season.displayDate}`}
          <br />
          <span className="text-2xl font-extrabold text-blue-100">
            {season.name}
          </span>
        </p>
      </div>
    </section>
  );
}
function SeasonHeroHeader3({ season }) {
  return (
    <section>
      <div>
        <img src="images/masthead-3.jpg" />
      </div>

      {/* Season info */}
      <div className="mb-2 px-8 pt-4 pb-6" style={{ backgroundColor: 'rgb(21, 20, 28)' }}>
        <p className="text-sm text-center leading-tight font-bold text-blue-200">
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

export default SeasonHeroHeader3