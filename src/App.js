import React from 'react';
import { useFetchRecipes } from './hooks/useFetchRecipes';

function App() {
  const { recipes, isLoading, error } = useFetchRecipes();

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
