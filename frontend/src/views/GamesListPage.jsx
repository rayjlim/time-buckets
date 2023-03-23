import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

import { REST_ENDPOINT } from '../constants';
import GameListItems from '../components/GameListItems';

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
  const [pageMeta, setPageMeta] = useState({ last_page: 1 });
  const formSizeMin = useRef();
  const formSizeMax = useRef();
  const formSearchTitle = useRef();

  /** Page Data look up */
  async function loadGames() {
    const endpoint = `${REST_ENDPOINT}/api/games/?page=${page}`;
    let searchFields = '';
    if (formSearchTitle.current.value !== '') {
      searchFields += `&search_title=${formSearchTitle.current.value}`;
    }
    if (formSizeMin.current.value !== '') {
      searchFields += `&size_min=${formSizeMin.current.value}`;
    }
    if (formSizeMax.current.value !== '') {
      searchFields += `&size_max=${formSizeMax.current.value}`;
    }
    setIsLoading(true);
    // TODO: if production, then pass mode: 'no-cors', in fetch options

    try {
      const response = await fetch(`${endpoint}${searchFields}`, {

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
  async function removeDuplicates() {
    toast.error('Removing...');
    const endpoint = `${REST_ENDPOINT}/api/games/removeDuplicates/`;

    try {
      const response = await fetch(`${endpoint}`);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        toast.error('Duplicates removed');
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
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
      <h1>Game List</h1>
      {isLoading && <h2>LOADING</h2>}
      <div>
        Search Title:
        <input type="text" ref={formSearchTitle} />
        Size Min:
        <input type="text" ref={formSizeMin} size="5" />
        Size Max:
        <input type="text" ref={formSizeMax} size="5" />
      </div>
      <nav aria-label="Page navigation" className="mt-4">
        <ReactPaginate
          containerClassName="pagination justify-content-center"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageMeta.last_page}
          previousLabel="< previous"
          breakLabel="..."
          nextLabel="next >"
          renderOnZeroPageCount={null}
        />
      </nav>
      page:
      {pageMeta.current_page}
      total:
      {pageMeta.total}
      {!gameId && !isLoading && (
        <GameListItems
          games={games}
          onUpdate={updateView}
          onSelectGame={selectGame}
        />
      )}
      <button type="button" onClick={() => removeDuplicates()}>Remove Duplicates</button>
    </>
  );
};

export default GamesListPage;
