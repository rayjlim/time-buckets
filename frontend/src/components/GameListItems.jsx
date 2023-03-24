import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import './GameListItems.css';

const GameList = ({ games }) => (
  <>
    {games.map(entry => (
      <Game game={entry} key={entry.id} />
    ))}
  </>
);
export default GameList;

GameList.propTypes = {
  games: PropTypes.array.isRequired,
};
