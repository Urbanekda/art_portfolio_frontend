import { useState, useEffect} from "react";

export const usePaint = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
         // Function to fetch portfolio data
    const fetchPortfolio = async () => {
        try {
          // Fetch the index of portfolio items
          const response = await fetch('/portfolio/paint/index.json');
          const data = await response.json();
          setData(data);
        } catch (err) {
          setError('Failed to load portfolio items');
          console.error('Error loading portfolio:', err);
        } finally {
          setLoading(false);
        }
        };
    
        fetchPortfolio();
      }, []);
    
      return { data, loading, error };
    };