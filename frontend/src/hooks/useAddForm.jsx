import { toast } from 'react-toastify';
import { REST_ENDPOINT } from '../constants';

const useAddForm = (onAddGoal, formRef) => {
  async function sendAddForm(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const title = formData.get('title');
    const type = formData.get('type');
    const endpoint = `${REST_ENDPOINT}goals/`;
    const newGoal = {
      title,
      type,
    };
    const config = {
      method: 'POST',
      body: JSON.stringify(newGoal),
    };
    try {
      const response = await fetch(endpoint, config);
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const output = await response.json();
        toast(`Added : ${JSON.stringify(output)}`);
        // const json = JSON.stringify(output);
        // alert(`${output.data.length}, ${json}`);
        onAddGoal(output.data);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
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

  return { sendAddForm, addRemoveType };
};

export default useAddForm;
