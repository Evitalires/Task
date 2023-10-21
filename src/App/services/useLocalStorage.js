import { useState } from 'react'

function useLocalStorage(itemName, initialValue) {
  const initialItems = JSON.parse(window.localStorage.getItem(itemName)) || initialValue;

  const [items, setItems] = useState(initialItems)

  const saveItems = (newItems) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }
  return [items, saveItems]
}

export { useLocalStorage }