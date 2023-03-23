import React from 'react';
import PropTypes from 'prop-types';
import { parse, format } from 'date-fns';

import './GameListItems.css';

const GameList = ({ games, onSelectGame }) => {
  function externalLink(url) {
    window.open(url, '_blank');
  }

  return (
    <>
      {games.map(entry => (
        <section key={entry.id} className="game-list-row">
          <img src={entry.image} alt={entry.title} className="game-image" />
          <div>
            <button
              onClick={() => onSelectGame(entry.id)}
              className="plainLink"
              type="button"
            >
              {entry.title}
            </button>
            <button type="button" onClick={() => externalLink(entry.fg_url)}>fg link</button>
            <div>
              fg id:
              {entry.fg_id}
              , genre:
              {entry.genre}
              , size:
              {entry.size_calculated}
            </div>
            <div>
              priority:
              {entry.priority}
              , platform:
              {entry.platform}
              , status:
              {entry.status}
              , graphic style:
              {entry.graphic_style}
              , tags:
              {entry.tags}
              {entry.thoughts}
              {/* {entry.replayability}
              {entry.issues}
              {entry.summary} */}
            </div>
            date:

            <span> (</span>
            {format(parse(
              entry.fg_article_date,
              'yyyy-MM-dd',
              new Date(),
            ), 'MM-yyyy')}
            <span>)</span>
            {/*
            {entry.size}
            {entry.created_at}
            {entry.updated_at}

            */}

          </div>
        </section>
      ))}
    </>
  );
};
export default GameList;

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  onSelectGame: PropTypes.func.isRequired,
};
