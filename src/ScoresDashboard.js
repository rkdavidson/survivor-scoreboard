import React from 'react';
import PlayerCardSmall from './components/PlayerCardSmall';

import './global.css';
import './index.css';

function getMembers(members, cast) {
  return members.map(member => cast.find(m => m.id === member));
}

function Team(props) {
  const { owner, members } = props;

  return (
    <section className="mb-12">
      {/* Team Title */}
      <div className="mb-4 pt-3">
        <h2 className="text-2xl font-black">{owner}</h2>
      </div>

      {/* Team Players */}
      <div className="flex -mx-2 mb-6">
        <PlayerCardSmall player={members[0]} />
        <PlayerCardSmall player={members[1]} />
      </div>
      <div className="flex -mx-2">
        <PlayerCardSmall player={members[2]} />
        <PlayerCardSmall player={members[3]} />
      </div>
    </section>
  );
}

function ScoresDashboard(props) {
  const { season, cast, tribes, ourGame } = props;

  return (
    <div className="container mx-auto p-4 pt-8">
      {ourGame.teams.map(team => {
        const members = getMembers(team.members, cast);
        console.log('members: ', members);
        return (
          <Team key={team.id} owner={team.owner} members={members} />
        );
      })}
    </div >
  );
}

export default ScoresDashboard;
