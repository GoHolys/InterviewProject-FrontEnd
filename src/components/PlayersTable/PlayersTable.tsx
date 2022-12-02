import { useState } from "react";
import Table from "../Table/Table";
import { PlayersTableProps } from "./PlayersTableTypes";

const PlayersTable = ({ players }: PlayersTableProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <Table players={players} searchQuery={searchQuery} />
    </div>
  );
};

export default PlayersTable;
