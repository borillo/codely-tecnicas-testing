import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then(({ results }) => {
        setPeople(results);
      })
      .catch(() => {
        setError(true);
      });
  });

  return (
    <>
      <h3>Starwars characters</h3>

      {error && <span>Error retrieving character list 💣</span>}

      <ul>
        {people.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
