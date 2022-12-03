import { Player } from "../PlayersTable/PlayersTableTypes";

export interface FavoriteTableProps {
  players: Player[];
  favorites: number[];
  handleRemoveFavorites: (id: number) => void;
}
