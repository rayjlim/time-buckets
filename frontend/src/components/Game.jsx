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
  const [current, setCurrent] = useState(game);

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
        setCurrent({
          ...current,
          priority: formPriority.current.value,
          platform: formPlatform.current.value,
          status: formStatus.current.value,
          graphic_style: formGraphicStyle.current.value,
          tags: formTags.current.value,
          thoughts: formThoughts.current.value,
        });
        setIsEditing(false);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
    //   toast.error(`loading error : ${err}`);
    }
  }

  return (
    <section key={current.id} className="game-list-row">
      <img src={current.image} alt={current.title} className="game-image" />
      <div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="plainLink"
          type="button"
        >
          {current.title}
        </button>
        <button type="button" onClick={() => externalLink(current.fg_url)}>
          fg link
        </button>
        <div>
          fg id:
          {current.fg_id}
          , genre:
          {current.genre}
          ,
          <span className={current.size_calculated > 20 ? 'game-size-large' : ''}>
            size:
            {current.size_calculated}
          </span>
          <span> Article date: (</span>
          {format(
            parse(current.fg_article_date, 'yyyy-MM-dd', new Date()),
            'MM-yyyy',
          )}
          <span>)</span>
        </div>
        {isEditing ? (
          <>
            <label htmlFor={formPriority}>
              Priority:
              <input name="myInput" ref={formPriority} defaultValue={current.priority} />
            </label>
            <label htmlFor={formPlatform}>
              Platform:
              <input ref={formPlatform} defaultValue={current.platform} />
            </label>

            <label htmlFor={formStatus}>
              Status:
              <input ref={formStatus} defaultValue={current.status} />
            </label>

            <label htmlFor={formGraphicStyle}>
              Graphic Style:
              <input ref={formGraphicStyle} defaultValue={current.graphic_style} />
            </label>

            <label htmlFor={formTags}>
              Tags:
              <input ref={formTags} defaultValue={current.tags} />
            </label>

            <label htmlFor={formThoughts}>
              Thoughts:
              <textarea ref={formThoughts} defaultValue={current.thoughts} />
            </label>
            {/* {current.replayability}
            {current.issues}
            {current.summary} */}
            <button type="button" onClick={() => saveGame()}>Save</button>
          </>
        ) : (
          <div className="manual">
            <span>
              Priority:
              {current.priority}
            </span>
            <span>
              Platform:
              {current.platform}
            </span>
            <span>
              Status:
              {current.status}
            </span>
            <span>
              Graphic style:
              {current.graphic_style}
            </span>
            <span>
              Tags:
              {current.tags}
            </span>
            <span>
              Thoughts:
              {current.thoughts}
            </span>
            {/* {current.replayability}
          {current.issues}
          {current.summary} */}
          </div>
        )}

        {/*
        {current.size}
        {current.created_at}
        {current.updated_at}

        */}
      </div>
    </section>
  );
};
export default Game;

Game.propTypes = {
  game: PropTypes.object.isRequired,
};
