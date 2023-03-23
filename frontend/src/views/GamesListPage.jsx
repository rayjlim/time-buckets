import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

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
  const [isLoading, setIsLoading] = useState(false);
  const [gameId, setGameId] = useState(null);
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [pageMeta, setPageMeta] = useState({});
  /** Page Data look up */
  async function loadGames() {
    const endpoint = `${REST_ENDPOINT}/api/games/?page=${page}`;

    setIsLoading(true);
    // TODO: if production, then pass mode: 'no-cors', in fetch options

    try {
      const response = await fetch(endpoint, {

      });
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const data = await response.json();
        console.log('data :', data);
        setGames(data.data);
        setPageMeta(data);
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

  const handlePageClick = event => {
    const newOffset = (event.selected * pageMeta.itemsPerPage) % games.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    // setItemOffset(newOffset);
    setPage(event.selected + 1);
  };

  useEffect(() => {
    (async () => {
      await loadGames();
    })();
  }, [page]);

  return (
    <>
      <ToastContainer />
      <span>Nav Goes Here</span>
      <h1> Game List</h1>

      {isLoading && <h2>LOADING</h2>}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageMeta.last_page}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      page:
      {pageMeta.current_page}
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
