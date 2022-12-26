import { useStore } from "../contexts/StoreContext";

const useFavorite = () => {
  const store = useStore();

  function toggleFavorite(val) {
    const favorites = [...store.favorites];

    if (favorites.includes(val)) {
      store.setFavorites(favorites.filter((item) => item !== val));
    } else {
      favorites.push(val);
      store.setFavorites(favorites);
    }
  }

  return { toggleFavorite };
};

export default useFavorite;
