import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// import { parse, format } from 'date-fns';
import { toast } from 'react-toastify';
import { REST_ENDPOINT } from '../constants';

import './Goal.css';

const tagsSet = ['to-download', 'to-install', 'installed', 'pink-paw', 'tried', 'to-review', 'skip', 'dl-high', 'finished'];

const Goal = ({ goal }) => {
  const formRef = useRef();
  const [current, setCurrent] = useState(goal);

  const [isEditing, setIsEditing] = useState(false);
  function externalLink(url) {
    window.open(url, '_blank');
  }

  async function saveGoal(event) {
    console.log('save goal');
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const priority = formData.get('priority');
    const platform = formData.get('platform');
    const status = formData.get('status');
    const graphicStyle = formData.get('graphicStyle');
    const tags = formData.get('tags');
    const thoughts = formData.get('thoughts');
    const playniteTitle = formData.get('playniteTitle');
    if (priority === '') {
      toast.error('Missing Priority value');
      return;
    }
    const endpoint = `${REST_ENDPOINT}/api/goals/${goal.id}`;
    const config = {
      method: 'POST',
      body: JSON.stringify({
        priority,
        platform,
        status,
        graphic_style: graphicStyle,
        tags,
        thoughts,
        playnite_title: playniteTitle,
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
          priority,
          platform,
          status,
          graphic_style: graphicStyle,
          tags,
          thoughts,
          playnite_title: playniteTitle,
        });
        setIsEditing(false);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    }
  }

  function addRemoveTag(content) {
    console.log('addRemove', content);

    const tagsInput = formRef.current.querySelector('input[name="tags"]');
    if (!tagsInput.value.includes(content)) {
      tagsInput.value = `${tagsInput.value} ${content}`;
    } else {
      tagsInput.value = tagsInput.value.replace(content, '').trim();
    }
  }

  let mainClassName = 'goal-list-row';
  switch (true) {
    case current.size_calculated > 20:
      mainClassName = `${mainClassName} large-size`;
      break;
    case current.size_calculated > 10:
      mainClassName = `${mainClassName} medium-size`;
      break;
    default:
      console.log('');
  }

  return (
    <section
      key={current.id}
      style={{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid lightgrey',
        alignItems: 'center',
      }}
    >
      <img
        src={current.image}
        alt="goal poster"
        className="goal-image"
        onClick={() => externalLink(current.fg_url)}
        aria-hidden="true"
      />
      <div className={mainClassName}>
        <div className="manual" style={{ margin: '.2rem' }}>
          <button
            onClick={() => setIsEditing(!isEditing)}
            type="button"
            style={{ margin: '0 .2rem' }}
          >
            Edit
          </button>
          {current.title}
          <span>
            {`fg id: ${current.fg_id}`}
          </span>
        </div>
        <div>
          <span>
            {`Genre: ${current.genre}`}
          </span>
          <span className={current.size_calculated > 20 ? 'goal-size-large' : ''}>
            {` Size: ${current.size_calculated}`}
          </span>
          {/* <span>
            {` Article date: (${format(
              parse(current.fg_article_date, 'yyyy-MM-dd', new Date()),
              'MMM-dd-yyyy',
            )})`}
          </span> */}
        </div>
        {isEditing ? (
          <div className="manual">
            <form ref={formRef} onSubmit={saveGoal}>
              <label
                htmlFor="priority"
                title="Priorities description
-1
- 1 - 20  Top tier to play
- 50 - 80  Next to install
- 80 - 100  Next to download + install
- 200  finished, installed, uninstalled,
- 300  Errors / Issues
- 400  There's a newer version"
              >
                Priority:
                <input name="priority" defaultValue={current.priority} />
              </label>
              <label htmlFor="platform">
                Platform:
                <input name="platform" defaultValue={current.platform} />
              </label>

              <label htmlFor="status">
                Status:
                <input name="status" defaultValue={current.status} />
              </label>

              <label htmlFor="graphicStyle">
                Graphic Style:
                <input name="graphicStyle" defaultValue={current.graphic_style} />
              </label>

              <label htmlFor="tags">
                Tags:
                <input name="tags" defaultValue={current.tags} />
                {tagsSet.map(tag => (
                  <button type="button" onClick={() => addRemoveTag(tag)} className="tagBtn">
                    {tag}
                  </button>
                ))}
              </label>
              <label htmlFor="thoughts" className="notesField">
                Notes:
                <a
                  href="#a"
                  title="progression types: level (Geometry Wars);
              storyline: Pine, Lightbringer, In Nightmare;
              Tech-tree (Craft the world, Old World, Patron)"
                >
                  I
                </a>
                <textarea name="thoughts" defaultValue={current.thoughts} />
              </label>
              <label htmlFor="playniteTitle" className="notesField">
                Playnite Title:
                <input name="playniteTitle" defaultValue={current.playnite_title} />
              </label>
              {/* {current.replayability}
            {current.issues}
            {current.summary} */}
              <button type="submit" className="saveBtn">Save</button>
            </form>
          </div>
        ) : (
          <>
            <div className="manual">
              <span title="Priorities description
-1
- 1 - 20  Top tier to play
- 50 - 80  Next to install
- 80 - 100  Next to download + install
- 200 finished, installed, uninstalled,
- 300 Errors / Issues
- 400 There's a newer version
- 500 Not interested"
              >
                Priority:
                {current.priority !== -1 && (
                  <span>
                    {current.priority}
                  </span>
                )}
                {`, Platform: ${current.platform} Status: ${current.status} Graphic style: ${current.graphic_style}, `}
                {`Tags: ${current.tags} Thoughts: ${current.thoughts}`}
              </span>
            </div>
            {current.playnite_title !== '' && (
              <div>
                {`pn: ${current.playnite_title}`}
                {current.playnite_last !== '' && `, ${current.playnite_last}, ${current.playnite_added}, ${current.playnite_playtime}`}
              </div>
            )}
            {/* {current.replayability}
          {current.issues}
          {current.summary} */}
          </>
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
export default Goal;

Goal.propTypes = {
  goal: PropTypes.object.isRequired,
};
