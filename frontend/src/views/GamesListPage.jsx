import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { REST_ENDPOINT } from '../constants';
import GameListItems from '../components/GameListItems';
import PaginationBar from '../components/PaginationBar';

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

const searchTtags = ['<untagged>', 'to-download', 'to-install', 'installed', 'pink-paw', 'tried', 'to-review', 'skip', 'dl-high'];

const GamesListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gameId, setGameId] = useState(null);
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [pageMeta, setPageMeta] = useState({ last_page: 1 });
  const formSizeMin = useRef();
  const formSizeMax = useRef();
  const formSearchTitle = useRef();
  const formSearchTags = useRef();
  const formTagChoices = useRef();
  const formOrderBy = useRef();

  /** Page Data look up */
  async function loadGames() {
    const endpoint = `${REST_ENDPOINT}/api/games/?page=${page}`;
    let searchFields = '';
    if (formSearchTitle.current.value !== '') {
      searchFields += `&search_title=${formSearchTitle.current.value}`;
    }
    if (formSearchTags.current.value !== '') {
      searchFields += `&tags=${formSearchTags.current.value}`;
    }
    if (formSizeMin.current.value !== '') {
      searchFields += `&size_min=${formSizeMin.current.value}`;
    }
    if (formSizeMax.current.value !== '') {
      searchFields += `&size_max=${formSizeMax.current.value}`;
    }
    if (formOrderBy.current.value !== '') {
      searchFields += `&order_by=${formOrderBy.current.value}`;
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
        const localGames = data.data.map(x => {
          const newVal = { ...x };
          if (x.platform === null) {
            newVal.platform = 1;
          }
          return newVal;
        });
        setGames(localGames);
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
      <h1>
        Game List
      </h1>
      {isLoading && <h2>LOADING</h2>}
      <div>
        <label htmlFor="formSearchTitle" className="searchField">
          Search Title:
          <input name="formSearchTitle" type="text" ref={formSearchTitle} />
        </label>
        <button type="button" onClick={() => loadGames()}>Search</button>
        <label htmlFor="formSearchTags" className="searchField">
          Tag:
          <input name="formSearchTags" type="text" ref={formSearchTags} />
          <select
            ref={formTagChoices}
            onChange={() => {
              console.log(formTagChoices.current.value);
              formSearchTags.current.value = formTagChoices.current.value;
            }}
          >
            <option value="">-</option>
            { searchTtags.map(tag => (
              <option value={tag}>{tag}</option>
            ))}
          </select>
        </label>
        <label htmlFor="formSizeMin" className="searchField">
          Size Min:
          <input type="text" ref={formSizeMin} size="5" />
        </label>
        <label htmlFor="formSizeMax" className="searchField">
          Size Max:
          <input type="text" ref={formSizeMax} size="5" />
        </label>
        <label htmlFor="formSizeMax" className="searchField">
          Order By:
          <select ref={formOrderBy}>
            <option value="">Updated At</option>
            <option value="updated-at-asc">Updated At -  Asc</option>
            <option value="priority">Priority</option>
          </select>
        </label>
      </div>
      <PaginationBar pageCount={pageMeta.last_page} pageChange={handlePageClick} />

      <div>
        page:
        {pageMeta.current_page}
        total:
        {pageMeta.total}
      </div>
      {!gameId && !isLoading && (
        <GameListItems
          games={games}
          onUpdate={updateView}
          onSelectGame={selectGame}
        />
      )}
      <PaginationBar pageCount={pageMeta.last_page} pageChange={handlePageClick} />

      <button type="button" onClick={() => removeDuplicates()}>Remove Duplicates</button>
    </>
  );
};

export default GamesListPage;
