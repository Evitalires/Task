import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);

      if (!localStorageItem) {
        window.localStorage.setItem(itemName, JSON.stringify(initialValue));
        setItems(initialValue);
      } else {
        const parsedItem = JSON.parse(localStorageItem);
        setItems(parsedItem);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  const saveItems = (newItems) => {
    try {
      window.localStorage.setItem(itemName, JSON.stringify(newItems));
      setItems(newItems);
    } catch (error) {
      setError(error);
    }
  };

  return {
    items,
    saveItems,
    error,
    loading,
  };
}

export { useLocalStorage };
