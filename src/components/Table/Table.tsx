import { useMemo } from "react";
import { TableProps } from "./TableTypes";

function isObject(variable: Record<string, string> | string | number) {
  return (
    typeof variable === "object" &&
    variable !== null &&
    !Array.isArray(variable)
  );
}

const Table = ({ players, searchQuery }: TableProps) => {
  const filteredPlayers = useMemo(
    () => players.filter((item) => !searchQuery?.includes(item.first_name)),
    [searchQuery, players]
  );

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(players[0]).map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlayers.map((item) => (
          <tr>
            {Object.values(item).map((data) =>
              !isObject(data) ? <td>{data}</td> : <td>{data.name}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
