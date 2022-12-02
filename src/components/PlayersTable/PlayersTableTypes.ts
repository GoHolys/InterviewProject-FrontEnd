export interface PlayersTableProps {
    players: Player[];
  }
  
  export interface Player {
    first_name: string;
    height_feet?: number;
    height_inches?: number;
    id: number;
    last_name: string;
    position: string;
    weight_pounds?: number;
    team: Team;
  }
  
  export interface Team {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
    name: string;
  }
  