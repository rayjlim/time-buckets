import React from 'react';
import PropTypes from 'prop-types';
import { parse, format } from 'date-fns';

const GameList = ({ games, onSelectGame }) => {
  function externalLink(url) {
    window.open(url, '_blank');
  }

  return (
    <>
      {games.map(entry => {
        const entryStyle = {
          margin: '5px',
          border: '1px solid red',
          textAlign: 'left',
        };

        return (
          <section key={entry.id} style={entryStyle} className="GameListRow">
            <button
              onClick={() => onSelectGame(entry.id)}
              className="plainLink"
              type="button"
            >
              <img src={entry.image} alt={entry.title} />
            </button>
            <div>
              {entry.priority}

              {entry.title}
              <button type="button" onClick={() => externalLink(entry.fg_url)}>fg link</button>

              fg id:
              {entry.fg_id}
              genre:
              {entry.genre}
              {entry.platform}
              size:
              {entry.size_calculated}
              {entry.status}
              <div>
                graphic style:
                {entry.graphic_style}
                {entry.issues}
                {entry.summary}
                {entry.tags}
                {entry.thoughts}
                {entry.replayability}
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
        );
      })}
    </>
  );
};
export default GameList;

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  onSelectGame: PropTypes.func.isRequired,
};
