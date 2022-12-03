import { useState } from "react";
import FavoritesTable from "./components/FavoritesTable/FavoritesTable";
import PlayersTable from "./components/PlayersTable/PlayersTable";
import useFetch from "./customHooks/useFetch";
import styles from "./App.module.css"

function App() {
  const { isLoading, info } = useFetch(
    "https://www.balldontlie.io/api/v1/players"
  );

  const [favorites, setFavorites] = useState<number[]>([]);

  const handleAddFavorites = (id: number) => {
    if (!favorites.includes(id)) {
      setFavorites((currFavorites) => [...currFavorites, id]);
    }
  };

  const handleRemoveFavorites = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites((currFavorites) =>
        currFavorites.filter((favorites) => favorites !== id)
      );
    }
  };


  const { data } = info;

  return (
    <>
      {isLoading ? (
        <h2>Loading Data</h2>
      ) : (
        <div className={styles.tablesContainer}>
          <PlayersTable
            players={data}
            handleAddFavorites={handleAddFavorites}
          />
          <FavoritesTable
            players={data}
            favorites={favorites}
            handleRemoveFavorites={handleRemoveFavorites}
          />
        </div>
      )}
    </>
  );
}

export default App;
