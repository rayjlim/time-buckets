import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { parse, format } from 'date-fns';
import { REST_ENDPOINT } from '../constants';

import './Game.css';

const Game = ({ game }) => {
  const formPriority = useRef();
  const formPlatform = useRef();
  const formStatus = useRef();
  const formGraphicStyle = useRef();
  const formTags = useRef();
  const formThoughts = useRef();

  const [isEditing, setIsEditing] = useState(false);
  function externalLink(url) {
    window.open(url, '_blank');
  }

  async function saveGame() {
    console.log('save game');
    const endpoint = `${REST_ENDPOINT}/api/games/${game.id}`;
    const config = {
      method: 'POST',
      body: JSON.stringify({
        priority: formPriority.current.value,
        platform: formPlatform.current.value,
        status: formStatus.current.value,
        graphic_style: formGraphicStyle.current.value,
        tags: formTags.current.value,
        thoughts: formThoughts.current.value,
      }),
    };
    try {
      const response = await fetch(endpoint, config);
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const data = await response.json();
        console.log('data :', data);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
    //   toast.error(`loading error : ${err}`);
    }
  }

  return (
    <section key={game.id} className="game-list-row">
      <img src={game.image} alt={game.title} className="game-image" />
      <div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="plainLink"
          type="button"
        >
          {game.title}
        </button>
        <button type="button" onClick={() => externalLink(game.fg_url)}>
          fg link
        </button>
        <div>
          fg id:
          {game.fg_id}
          , genre:
          {game.genre}
          ,
          <span className={game.size_calculated > 20 ? 'game-size-large' : ''}>
            size:
            {game.size_calculated}
          </span>
          <span> Article date: (</span>
          {format(
            parse(game.fg_article_date, 'yyyy-MM-dd', new Date()),
            'MM-yyyy',
          )}
          <span>)</span>
        </div>
        {isEditing ? (
          <>
            <label htmlFor={formPriority}>
              Priority:
              <input name="myInput" ref={formPriority} value={game.priority} />
            </label>
            <label htmlFor={formPlatform}>
              Platform:
              <input ref={formPlatform} value={game.platform} />
            </label>

            <label htmlFor={formStatus}>
              Status:
              <input ref={formStatus} value={game.status} />
            </label>

            <label htmlFor={formGraphicStyle}>
              Graphic Style:
              <input ref={formGraphicStyle} value={game.graphic_style} />
            </label>

            <label htmlFor={formTags}>
              Tags:
              <input ref={formTags} value={game.tags} />
            </label>

            <label htmlFor={formThoughts}>
              Thoughts:
              <textarea ref={formThoughts} value={game.thoughts} />
            </label>
            {/* {game.replayability}
            {game.issues}
            {game.summary} */}
            <button type="button" onClick={() => saveGame()}>Save</button>
          </>
        ) : (
          <div className="manual">
            <span>
              Priority:
              {game.priority}
            </span>
            <span>
              Platform:
              {game.platform}
            </span>
            <span>
              Status:
              {game.status}
            </span>
            <span>
              Graphic style:
              {game.graphic_style}
            </span>
            <span>
              Tags:
              {game.tags}
            </span>
            <span>
              Thoughts:
              {game.thoughts}
            </span>
            {/* {game.replayability}
          {game.issues}
          {game.summary} */}
          </div>
        )}

        {/*
        {game.size}
        {game.created_at}
        {game.updated_at}

        */}
      </div>
    </section>
  );
};
export default Game;

Game.propTypes = {
  game: PropTypes.object.isRequired,
};
