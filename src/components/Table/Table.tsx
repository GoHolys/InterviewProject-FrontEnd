import { useMemo } from "react";
import { TableProps } from "./TableTypes";
import styles from "./Table.module.css";

function isObject(variable: Record<string, string> | string | number) {
  return (
    typeof variable === "object" &&
    variable !== null &&
    !Array.isArray(variable)
  );
}

const Table = ({
  title,
  players,
  searchQuery,
  actionIcon,
  action,
  topAction,
  tableColor,
}: TableProps) => {
  const filteredPlayers = useMemo(
    () =>
      !searchQuery
        ? players
        : players.filter((item) =>
            `${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()} `.startsWith(
              searchQuery.toLowerCase()
            )
          ),
    [searchQuery, players]
  );

  return (
    <>
      {players.length > 0 ? (
        <div className={styles.tableContainer}>
          <div className={styles.topInfo}>
            <h2 className={styles.tableTitle}>{title}</h2>
            {topAction}
          </div>
          <table className={styles.rowsContainer}>
            <thead>
              <tr
                style={
                  tableColor
                    ? { backgroundColor: tableColor }
                    : { backgroundColor: "#009879" }
                }
              >
                <th>actions</th>
                {Object.keys(players[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player) => (
                <tr key={player.id}>
                  <td>
                    <img
                      onClick={() => action(player.id)}
                      src={actionIcon}
                      alt=""
                    />
                  </td>
                  {Object.values(player).map((data, i) =>
                    !isObject(data) ? (
                      <td key={i}>{data}</td>
                    ) : (
                      <td key={i}>{data.name}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Table;
