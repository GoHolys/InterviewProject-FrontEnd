import { useState } from "react";
import Table from "../Table/Table";
import { PlayersTableProps } from "./PlayersTableTypes";
import unfilledStar from "../../images/unFilledStar.png";
import styles from "./PlayersTableContainer.module.css";

const PlayersTable = ({
  players,
  handleAddFavorites,
}: PlayersTableProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.playersTableContainer}>
      <Table
        players={players}
        searchQuery={searchQuery}
        action={handleAddFavorites}
        actionIcon={unfilledStar}
        title="Players Table"
        topAction={
          <input
            type="text"
            style={{ alignSelf: "center", marginLeft: "20px" }}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search..."
          ></input>
        }
      />
    </div>
  );
};

export default PlayersTable;
