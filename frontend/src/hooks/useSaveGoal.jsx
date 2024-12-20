import { toast } from 'react-toastify';
import { REST_ENDPOINT } from '../constants';

const useSaveGoal = (goal, onRemoveGoal, current, setCurrent, setIsEditing, formRef) => {
  async function saveGoal(event) {
    console.log('save goal');
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const title = formData.get('title');
    const priority = formData.get('priority');
    const reason = formData.get('reason');
    const note = formData.get('note');
    const addedAt = formData.get('addedAt');
    const tags = formData.get('tags');
    const thoughts = formData.get('thoughts');
    const type = formData.get('type');

    const endpoint = `${REST_ENDPOINT}goals/${goal.id}`;
    const config = {
      method: 'POST',
      body: JSON.stringify({
        title,
        priority,
        reason,
        note,
        addedAt,
        tags,
        thoughts,
        type,
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
          title,
          priority,
          reason,
          note,
          tags,
          added_at: addedAt,
          type,
        });
        setIsEditing(false);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    }
  }
  async function removeGoal() {
    console.log('remove goal');

    const endpoint = `${REST_ENDPOINT}goals/${goal.id}`;
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json', // Optional: Specify if sending JSON data
      },
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
        setIsEditing(false);
        onRemoveGoal(goal.id);
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
  function addRemoveType(content) {
    console.log('addRemove', content);

    const typeInput = formRef.current.querySelector('input[name="type"]');
    if (!typeInput.value.includes(content)) {
      typeInput.value = `${typeInput.value} ${content}`;
    } else {
      typeInput.value = typeInput.value.replace(content, '').trim();
    }
  }

  return {
    saveGoal,
    removeGoal,
    addRemoveTag,
    addRemoveType,
  };
};

export default useSaveGoal;
