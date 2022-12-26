import React, { useContext, useState } from "react";

const StoreContext = React.createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
    <StoreContext.Provider
      value={{
        favorites: favorites,
        setFavorites: setFavorites,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
