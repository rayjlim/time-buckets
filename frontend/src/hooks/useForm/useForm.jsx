import { useCallback, useMemo, useRef } from 'react';

export default function useForm() {
  const ref = useRef();

  /**
   * get all the values in the form
   *
   * @returns {object} all values
   */
  const getAll = useCallback(() => {
    const { current: form } = ref;

    return Object.fromEntries(new FormData(form));
  }, []);

  /**
   * get specific value from the form
   *
   * @param {string} name name of the input
   * @returns {string} specific value
   */
  const get = useCallback(
    name => {
      const { current: form } = ref;

      if (!form[name]) {
        console.warn(`useForm: ${name} does not exist in form`);
        return;
      }

      // eslint-disable-next-line consistent-return
      return getAll()[name];
    },
    [getAll],
  );

  /**
   * update an input
   *
   * @param {string} name name of the input
   * @param {string} value new value
   * @returns {void}
   */
  const set = useCallback((name, value) => {
    const { current: form } = ref;

    if (!form[name]) {
      console.warn(`useForm: ${name} does not exist in form`);
      return;
    }

    form[name].value = value;
  }, []);

  /**
   * reset the form
   *
   * @returns {void}
   */
  const clear = useCallback(() => {
    const inputs = Object.keys(getAll());

    inputs.forEach(name => set(name, ''));
  }, [getAll, set]);

  return useMemo(
    () => [
      ref,
      {
        getAll,
        get,
        set,
        clear,
      },
    ],
    [getAll, get, set, clear],
  );
}
