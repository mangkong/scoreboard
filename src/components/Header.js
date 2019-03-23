import React from 'react';

export const Header = (props) => {
    const {title,totalPlayers} = props;
    return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
}