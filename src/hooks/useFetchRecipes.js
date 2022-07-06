import { useState, useEffect } from 'react';

export function useFetchRecipes() {
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
        setError('Error');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { recipes, isLoading, error };
}
