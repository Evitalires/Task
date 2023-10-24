import { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {
  /* const initialItems = JSON.parse(window.localStorage.getItem(itemName)) || initialValue;

  const [items, setItems] = useState(initialItems)

  const saveItems = (newItems) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }
  return [items, saveItems] */
  const initialItems = JSON.parse(window.localStorage.getItem(itemName)) || initialValue;
  const [items, setItems] = useState(initialItems)//
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if(!localStorageItem) {
        window.localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
      } else {
        parsedItem = JSON.parse(localStorageItem)
        setItems(parsedItem)
      }

      setLoading(false)
    }  
    catch (error) {
      setLoading(false)
      setError(error)
    }
  }, [itemName, initialValue])
  const saveItems = (newItems) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }
  return {
    items,
    saveItems,
    error,
    loading
  } 
}

export { useLocalStorage }