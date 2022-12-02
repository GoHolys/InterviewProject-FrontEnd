import { Player } from "../PlayersTable/PlayersTableTypes";

export interface TableProps {
  players: Player[];
  searchQuery?: string;
}
