import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { REST_ENDPOINT } from '../constants';
import GameListItems from '../components/GameListItems';
import PaginationBar from '../components/PaginationBar';

import './GamesListPage.css';
import 'react-toastify/dist/ReactToastify.css';
import pkg from '../../package.json';

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
  const pnForm = useRef();
  const searchForm = useRef();

  const formTagChoices = useRef();

  /** Page Data look up */
  async function loadGames(event) {
    event?.preventDefault();
    const formData = new FormData(searchForm.current);
    const searchTitle = formData.get('searchTitle');
    const tags = formData.get('tags');
    const sizeMin = formData.get('sizeMin');
    const sizeMax = formData.get('sizeMax');
    const orderBy = formData.get('orderBy');
    const startsWith = formData.get('startsWith');

    const endpoint = `${REST_ENDPOINT}/api/games/?page=${page}`;
    let searchFields = '';
    if (searchTitle !== '') {
      searchFields += `&search_title=${searchTitle}`;
    }
    if (tags !== '') {
      searchFields += `&tags=${tags}`;
    }
    if (sizeMin !== '') {
      searchFields += `&size_min=${sizeMin}`;
    }
    if (sizeMax !== '') {
      searchFields += `&size_max=${sizeMax}`;
    }
    if (orderBy !== '') {
      searchFields += `&order_by=${orderBy}`;
    }
    if (startsWith !== '') {
      searchFields += `&starts_with=${startsWith}`;
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

  async function sendPnHtml(event) {
    event.preventDefault();
    const formData = new FormData(pnForm.current);
    const pnHtml = formData.get('pnHtml');
    const endpoint = `${REST_ENDPOINT}/api/playnite`;
    const config = {
      method: 'POST',
      body: JSON.stringify({
        pnHtml,
      }),
    };
    try {
      const response = await fetch(endpoint, config);
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
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

  const letters = [];

  for (let i = 97; i <= 122; i++) {
    letters.push(String.fromCharCode(i));
  }
  const searchLetter = async letter => {
    console.log(letter);

    const startsWith = searchForm.current.querySelector('input[name="startsWith"]');
    startsWith.value = letter;
    const orderBy = searchForm.current.querySelector('select[name="orderBy"]');
    orderBy.value = 'title';
    setPage(1);
    await loadGames();
  };

  const changeTitle = () => {
    const startsWith = searchForm.current.querySelector('input[name="startsWith"]');
    startsWith.value = '';
  };

  return (
    <>
      <h1>Game Collection</h1>
      {isLoading && <h2>LOADING</h2>}
      <div>
        <form ref={searchForm} onSubmit={loadGames}>
          <input name="startsWith" type="hidden" />
          <label htmlFor="searchTitle" className="searchField">
            Search Title:
            <input name="searchTitle" type="text" onChange={changeTitle} />
          </label>
          <button type="submit">Search</button>
          <label htmlFor="tags" className="searchField">
            Tag:
            <input name="tags" type="text" />
            <select
              ref={formTagChoices}
              onChange={() => {
                const tagsInput = searchForm.current.querySelector('input[name="tags"]');

                tagsInput.value = formTagChoices.current.value;
              }}
            >
              <option value="">-</option>
              {searchTtags.map(tag => (
                <option value={tag}>{tag}</option>
              ))}
            </select>
          </label>
          <label htmlFor="sizeMin" className="searchField">
            Size Min:
            <input name="sizeMin" type="text" size="5" />
          </label>
          <label htmlFor="sizeMax" className="searchField">
            Size Max:
            <input name="sizeMax" type="text" size="5" />
          </label>
          <label htmlFor="orderBy" className="searchField">
            Order By:
            <select name="orderBy">
              <option value="">Updated At</option>
              <option value="updated-at-asc">Updated At -  Asc</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </form>
        {letters.map(letter => (
          <button type="button" onClick={() => searchLetter(letter)} className="letter">{letter}</button>
        ))}
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
      <form ref={pnForm} onSubmit={sendPnHtml}>
        <textarea name="pnHtml" />
        <button type="submit">parse PN html</button>

      </form>
      <div>{`version ${pkg.version}`}</div>
    </>
  );
};

export default GamesListPage;
