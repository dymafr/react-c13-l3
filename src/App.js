import React, { useState, useEffect } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://restapi.fr/api/recipes');
        if (response.ok) {
          const fetchedData = await response.json();
          setRecipes(Array.isArray(fetchedData) ? fetchedData : [fetchedData]);
        } else {
          setError('Error');
        }
      } catch (e) {
        setError(JSON.stringify(e));
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ backgroundColor: '#fefefe', height: '100vh', width: '100%' }}
    >
      {isLoading ? (
        <p>Chargement ....</p>
      ) : (
        <ul>
          {recipes.map((r) => (
            <li key={r._id}>{r.title}</li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;

// function useData(url) {
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     let ignore = false;
//     fetch(url)
//       .then(response => response.json())
//       .then(json => {
//         if (!ignore) {
//           setIsLoaded(true);
//           setResult(json);
//         }
//       }, (error) => {
//        setIsLoaded(true);
//        setError(error);
//     });
//     return () => {
//       ignore = true;
//     };
//   }, [url]);
//   return {result, error, isLoaded};
// }
