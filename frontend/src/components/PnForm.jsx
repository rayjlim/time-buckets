import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { REST_ENDPOINT } from '../constants';

const PnForm = () => {
  const pnForm = useRef();
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
      } else {
        const output = await response.json();
        const json = JSON.stringify(output);
        alert(`${output.data.length}, ${json}`);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    }
  }

  return (
    <form ref={pnForm} onSubmit={sendPnHtml}>
      <textarea name="pnHtml" />
      <button
        type="submit"
        title="Sync PlayNite to Game Collection required html export (pext file), double click to  install, configure under add-ons extensions > Html Exporter to export from playnite, view source of index.html copy and paste to game collector"
      >
        parse PN html
      </button>
    </form>
  );
};
export default PnForm;
