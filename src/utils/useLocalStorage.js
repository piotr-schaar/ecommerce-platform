import { useState, useEffect } from 'react';

const useLocalStorage = localStorageKey => {
  const [value, setValue] = useState(localStorage.getItem(localStorageKey) || null);

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
    // eslint-disable-next-line
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
