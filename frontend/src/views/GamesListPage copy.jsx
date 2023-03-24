import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import useForm from '../hooks/useForm';
import GameList from '../components/GameList';
// import AddForm from '../components/AddForm';
// import GameFull from '../components/GameFull';
import pkg from '../../package.json';
import { REST_ENDPOINT, STORAGE_KEY } from '../constants';

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

  const [formRef, form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [GameId, setGameId] = useState(null);
  const [Games, setGames] = useState([]);
  const [navdata, setNavdata] = useState([]);
  const [refs, setRefs] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [viewed, setViewed] = useState(false);

  /** Page Data look up */
  async function loadGames() {
    const searchParam = form.get('searchParam');
    console.log('loadGames#searchParam:', searchParam);
    let endpoint = `${REST_ENDPOINT}/index.php?cmd=Games`;
    console.log(
      `"searchParam.length : ${searchParam.length}`,
    );

    const hasSearch = searchParam.length > 0;
    console.log(`hasSearch : ${hasSearch}`);
    console.log(`viewed : ${viewed}`);
    const currentPage = pageRef.current && pageRef.current.value ? pageRef.current.value : 1;

    if (!viewed) {
      endpoint += '&unviewed=true';
    } else if (hasSearch) {
      endpoint += `&s=${searchParam}&page=${currentPage}`;
    } else {
      endpoint += `&page=${currentPage}`;
    }
    setIsLoading(true);
    try {
      const response = await fetch(endpoint);
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const data = await response.json();

        console.log('data :', data);
        const GameRefs = data.Games.reduce((acc, value) => {
          acc[value.id] = React.createRef();
          return acc;
        }, {});
        setGames(data.Games);
        setNavdata(data.navdata);
        pageRef.current.value = data.page;
        setRefs(GameRefs);
        // TODO: check if scrollIndex is out of bounds
        if (scrollIndex) {
          refs[scrollIndex].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
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

  const handleSearch = () => {
    debouncedLoadGames();
  };

  // const getPageParams = () => {
  //   const loc = window.location + "";
  //   console.log("loc :", loc);
  //   const param = loc.substring(loc.indexOf("?"));
  //   console.log("param :", param);
  //   return new URLSearchParams(param);
  // }

  /** View functions */
  function toggleViewed() {
    console.log(`toggle view called ${viewed}`);
    setViewed(!viewed);
    setScrollIndex(null);
  }

  const updateView = () => {
    console.log('updateView called');
    debouncedLoadGames();
  };

  //   /** Game functions */
  //   function resetGame() {
  //     setGameId(null);
  //   }
  //   const GameAdded = title => {
  //     console.log('title :>> ', title);
  //     toast(`Game added ${title}`);
  //     setViewed(false);
  //     setGameId(null);
  //     debouncedLoadGames();
  //   };
  //   const GameClosed = message => {
  //     console.log('GameClosed :>> ', message);
  //     // addToast(`message`);
  //     setGameId(null);
  //     debouncedLoadGames();
  //   };

  const selectGame = id => {
    setGameId(id);
    // scrollIndex: id,

    // this.state.GameRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  };

  /** Page Nav functions */
  function jumpToPage() {
    // setScrollIndex(null);
    debouncedLoadGames();
    setGameId(null);
  }

  function pageDirection(offset) {
    pageRef.current.value = parseInt(pageRef.current.value, 10) + offset;
    setScrollIndex(null);
    debouncedLoadGames();
  }

  /** Nav JSX setup */
  const prevBtn = navdata.prev !== '' ? (
    <button onClick={() => pageDirection(-1)} type="button">
      <i className="fa fa-chevron-left" />
      Prev
    </button>
  ) : (
    <button disabled type="button">
      <i className="fa fa-chevron-left" />
      Prev
    </button>
  );
  const nextBtn = navdata.next !== '' ? (
    <button onClick={() => pageDirection(1)} type="button">
      Next
      <i className="fa fa-chevron-right" />
    </button>
  ) : (
    <button disabled type="button">
      Next
      <i className="fa fa-chevron-right" />
    </button>
  );

  useEffect(() => {
    (async () => {
      console.log(`useEffect ${viewed}`);
      loadGames();
    })();
  }, [pageRef.current, viewed]);

  const isAuthed = window.localStorage.getItem(STORAGE_KEY) !== 'undefined'
    && window.localStorage.getItem(STORAGE_KEY) !== 'null';

  return (
    <>
      <ToastContainer />
      <NavLink to="/login" className="App-link" style={{ marginRight: '10px' }}>
        {!isAuthed ? 'Login' : 'Logout'}
      </NavLink>
      {viewed ? (
        <button onClick={() => toggleViewed()} type="button">
          UnSeen
          <i className="fa fa-eye-slash" style={{ marginLeft: '.5em' }} />
        </button>
      ) : (
        <button onClick={() => toggleViewed()} type="button">
          Seen
          <i className="fa fa-eye" style={{ marginLeft: '.5em' }} />
        </button>
      )}
      <>
        <NavLink to="/yearReport" className="App-link" style={{ marginLeft: '.4em' }}>
          Year Report
        </NavLink>
        ,
        <NavLink to="/timelineReport" className="App-link" style={{ marginLeft: '.4em' }}>
          Timeline Report
        </NavLink>
      </>
      <h1>
        {viewed ? (
          <>
            Game List Seen
            <i className="fa fa-eye" style={{ marginLeft: '.4em' }} />
          </>
        ) : (
          <>
            Game List UnSeen
            <i className="fa fa-eye-slash" style={{ marginLeft: '.4em' }} />
          </>
        )}
      </h1>
      {/* {isAuthed && <AddForm onSuccess={title => GameAdded(title)} /> }
      {GameId && (
        <>
          <button
            onClick={() => resetGame()}
            type="button"
            className="btn btn-secondary"
          >
            <i className="fa fa-times-circle" />
            Close Game
          </button>
          <GameFull
            id={GameId}
            onClose={GameClosed}
          />
        </>
      )} */}
      <section className="buttonRow">
        {prevBtn}
        {/* {pageRef.current ? pageRef.current.value : ''} */}
        <input
          type="text"
          ref={pageRef}
          size="3"
        />
        <button onClick={() => jumpToPage()} type="button">
          <i className="fa fa-file-upload" />
          Go to
        </button>
        {nextBtn}
      </section>
      <section className="searchBar">
        <form onSubmit={handleSearch} ref={formRef}>
          <i className="fa fa-search" />
          <input
            type="text"
            name="searchParam"
            onChange={() => debouncedLoadGames()}
          />
          <input type="button" value="clear" onClick={() => { form.clear(); handleSearch(); }} />
        </form>
      </section>
      <div>
        {'Page Param: '}
        {/* {form.get('searchParam')} */}
        {', Total: '}
        {navdata.totalResults}
        {', Page '}
        {pageRef.current ? pageRef.current.value : ''}
        {' of '}
        {navdata.totalPages}
      </div>
      {isLoading && <h2>LOADING</h2>}
      {!GameId && !isLoading && (
        <GameList
          Games={Games}
          refs={refs}
          onUpdate={updateView}
          onSelectGame={selectGame}
        />
      )}
      <section className="buttonRow">
        {prevBtn}
        {'Page: '}
        {/* {pageRef.current.value} */}
        {' '}
        {nextBtn}
      </section>
      <div>
        {'Page Params: '}
        {/* {form.get('searchParam')} */}
        {', Total: '}
        {navdata.totalResults}
        {', Page '}
        {pageRef.current ? pageRef.current.value : ''}
        {' of '}
        {navdata.totalPages}
      </div>
      <section>
        <NavLink to="/yearReport" className="App-link" style={{ marginLeft: '.4em' }}>
          Year Report
        </NavLink>
        ,
        <NavLink to="/timelineReport" className="App-link" style={{ marginLeft: '.4em' }}>
          Timeline Report
        </NavLink>
        ,
        <NavLink to="/logs" className="App-link" style={{ marginLeft: '.4em' }}>
          Logs
        </NavLink>
        {', '}
        <span className="footer-version">
          v
          {pkg.version}
        </span>
      </section>
      <br />
      <br />
    </>
  );
};

export default GamesListPage;
