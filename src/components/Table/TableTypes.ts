import { Player } from "../PlayersTable/PlayersTableTypes";

export interface TableProps {
  players: Player[];
  searchQuery?: string;
  action: (id: number) => void;
  actionIcon: string;
  title: string;
  topAction?: JSX.Element;
  tableColor?: string;
}
