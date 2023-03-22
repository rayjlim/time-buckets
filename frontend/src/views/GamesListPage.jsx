import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { REST_ENDPOINT } from '../constants';
import GameList from '../components/GameList';

import './GamesListPage.css';
import 'react-toastify/dist/ReactToastify.css';

const DEBOUNCE_TIME = 300;

function debounce(func, wait, immediate) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const GamesListPage = () => {
  const pageRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [gameId, setGameId] = useState(null);
  const [games, setGames] = useState([]);

  /** Page Data look up */
  async function loadGames() {
    const endpoint = `${REST_ENDPOINT}games/`;

    setIsLoading(true);
    try {
      const response = await fetch(endpoint, {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const data = await response.json();
        console.log('data :', data.data.data);
        setGames(data.data.data);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  /** Search functions */
  const debouncedLoadGames = debounce(loadGames, DEBOUNCE_TIME);

  const updateView = () => {
    console.log('updateView called');
    debouncedLoadGames();
  };
  const selectGame = id => {
    setGameId(id);
  };

  useEffect(() => {
    (async () => {
      loadGames();
    })();
  }, [pageRef.current]);

  return (
    <>
      <ToastContainer />
      <span>Nav Goes Here</span>
      <h1> Game List</h1>

      {isLoading && <h2>LOADING</h2>}
      {!gameId && !isLoading && (
        <GameList
          games={games}
          onUpdate={updateView}
          onSelectGame={selectGame}
        />
      )}
    </>
  );
};

export default GamesListPage;
