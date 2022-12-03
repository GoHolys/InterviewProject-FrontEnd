import { useState } from "react";
import deleteIcon from "../../images/delete.png";
import Table from "../Table/Table";
import { FavoriteTableProps } from "./FavoritesTableTypes";

const FavoritesTable = ({
  players,
  favorites,
  handleRemoveFavorites,
}: FavoriteTableProps) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const favoritePlayers = players.filter((player) =>
    favorites.includes(player.id)
  );

  return (
    <Table
      players={favoritePlayers}
      actionIcon={deleteIcon}
      action={handleRemoveFavorites}
      title="Favorites Table"
      topAction={
        <input
          type="color"
          id="colorpicker"
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      }
      tableColor={backgroundColor}
    />
  );
};

export default FavoritesTable;
