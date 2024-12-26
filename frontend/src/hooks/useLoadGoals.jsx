import { toast } from 'react-toastify';
import { REST_ENDPOINT } from '../constants';

const useLoadGoals = (searchForm, page, setIsLoading, setGoals, setPageMeta) => {
  async function loadGoals(event) {
    console.log(event);
    event?.preventDefault();
    const formData = new FormData(searchForm.current);
    const searchTitle = formData.get('searchTitle');
    const type = formData.get('type');
    const tags = formData.get('tags');

    const orderBy = formData.get('orderBy');
    const startsWith = formData.get('startsWith');
    const priority = formData.get('priority');
    const parentId = formData.get('parentId');

    const endpoint = `${REST_ENDPOINT}goals/?page=${page}`;
    let searchFields = '';
    if (searchTitle !== '') {
      searchFields += `&search_title=${searchTitle}`;
    }
    if (type !== '') {
      searchFields += `&type=${type}`;
    }

    if (tags !== '') {
      searchFields += `&tags=${tags}`;
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
    if (parentId !== '') {
      searchFields += `&parent_id=${parentId}`;
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

  return {
    loadGoals,
  };
};

export default useLoadGoals;
