import { useState } from 'react';
import { storage } from '../services/storage/localStorage';
const KEY = 'emerald-addis:favorites';
export function useFavoriteStore() {
  const [favorites, setFavorites] = useState(() => storage.get(KEY, []));
  const toggleFavorite = id => setFavorites(current => {
    const next = current.includes(id) ? current.filter(item => item !== id) : [...current, id];
    storage.set(KEY, next);
    return next;
  });
  const isFavorite = id => favorites.includes(id);
  return { favorites, toggleFavorite, isFavorite };
}
