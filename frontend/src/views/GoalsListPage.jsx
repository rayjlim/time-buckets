import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { REST_ENDPOINT } from '../constants';
import GoalList from '../components/GoalList';
import PaginationBar from '../components/PaginationBar';
import AddGoalForm from '../components/AddGoalForm';

import 'react-toastify/dist/ReactToastify.css';
import './GoalsListPage.css';

import pkg from '../../package.json';

const searchTags = ['<untagged>', 'watch', 'hike', 'animals'];

// const typeSet = ['location', 'experience', 'achievement'];
// const tagsSet = ['watch', 'hike', 'animals'];

const GoalsListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [goals, setGoals] = useState([]);
  const [page, setPage] = useState(1);
  const [pageMeta, setPageMeta] = useState({ last_page: 1, current_page: 1, total: -1 });
  const searchForm = useRef();

  const formTagChoices = useRef();

  /** Page Data look up */
  async function loadGoals(event) {
    console.log(event);
    event?.preventDefault();
    const formData = new FormData(searchForm.current);
    const searchTitle = formData.get('searchTitle');
    const tags = formData.get('tags');
    const sizeMin = formData.get('sizeMin');
    const sizeMax = formData.get('sizeMax');
    const orderBy = formData.get('orderBy');
    const startsWith = formData.get('startsWith');
    const priority = formData.get('priority');

    const endpoint = `${REST_ENDPOINT}goals/?page=${page}`;
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
    if (priority !== '') {
      searchFields += `&priority=${priority}`;
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
        setGoals(data.goals);
        setPageMeta(data.meta);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    } finally {
      setIsLoading(false);
    }
  }
  const onAddGoal = newGoal => {
    const updatedItems = [...goals, newGoal];
    setGoals(updatedItems);
  };
  const onRemoveGoal = id => {
    const updatedGoals = goals.filter(item => item.id !== id);
    setGoals(updatedGoals);
  };

  /** Search functions */

  const handlePageClick = event => {
    const newOffset = (event.selected * pageMeta.itemsPerPage) % goals.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    // setItemOffset(newOffset);
    setPage(event.selected + 1);
  };

  useEffect(() => {
    (async () => {
      await loadGoals();
    })();
  }, [page]);

  const clearFields = async () => {
    const searchTitle = searchForm.current.querySelector('input[name="searchTitle"]');
    searchTitle.value = '';
    const startsWith = searchForm.current.querySelector('input[name="startsWith"]');
    startsWith.value = '';
    const orderBy = searchForm.current.querySelector('select[name="orderBy"]');
    orderBy.value = '';
    setPage(1);
    await loadGoals();
  };

  const changeTitle = () => {
    const startsWith = searchForm.current.querySelector('input[name="startsWith"]');
    startsWith.value = '';
  };

  console.log(pageMeta);

  return (
    <>
      <h1>Time Buckets</h1>
      {isLoading && <h2>LOADING</h2>}
      <div>
        <AddGoalForm onAddGoal={onAddGoal} />
        <form ref={searchForm} onSubmit={loadGoals}>
          <input name="startsWith" type="hidden" />
          <label htmlFor="searchTitle" className="searchField">
            Search Title:
            <input name="searchTitle" type="text" onChange={changeTitle} />
          </label>
          <button type="submit">Search</button>
          <button type="button" onClick={() => clearFields()}>Clear</button>
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
              {searchTags.map(tag => (
                <option value={tag}>{tag}</option>
              ))}
            </select>
          </label>
          <label htmlFor="priority" className="searchField">
            Priority:
            <input name="priority" type="text" size="4" />
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
              <option value="fg_article_date">Article Date</option>
              <option value="updated-at-asc">Updated At -  Asc</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </form>
      </div>
      <PaginationBar pageCount={pageMeta.last_page} pageChange={handlePageClick} />

      <div>
        { `page: ${pageMeta.current_page} total: ${pageMeta.total}`}
      </div>
      {!isLoading && (
        <GoalList
          goals={goals}
          onRemoveGoal={onRemoveGoal}
        />
      )}
      <PaginationBar pageCount={pageMeta.last_page} pageChange={handlePageClick} />

      <div>{`version ${pkg.version}`}</div>
    </>
  );
};

export default GoalsListPage;
