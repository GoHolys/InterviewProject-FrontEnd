import PlayersTable from "./components/PlayersTable/PlayersTable";
import useFetch from "./customHooks/useFetch";

function App() {
  const { isLoading, info } = useFetch(
    "https://www.balldontlie.io/api/v1/players"
  );

  const { data } = info;

  return (
    <>
      {isLoading ? (
        <h2>Loading Data</h2>
      ) : (
        <PlayersTable players={data} />
      )}
    </>
  );
}

export default App;
