import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Tips.css'; // Import CSS module for component-specific styling

const Tips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await axios.post('http://localhost:5001/api/get-completion', {
          model: 'gpt-3.5-turbo-instruct',
          prompt: 'Give me 10 gardening tips',
          max_tokens: 500
        });
        const rawTips = response.data.choices[0].text;
        const parsedTips = rawTips.split('\n').filter(tip => tip.trim().length > 0); // Split by newline and filter out empty lines
        setTips(parsedTips);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tips:', error);
        setError('Failed to fetch tips. Please try again later.');
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  return (
    <div className={styles.tipsContainer}>
      <h1 className={styles.title}>Gardening Tips</h1>
      {loading ? (
        <p className={styles.loadingMessage}>Loading tips...</p>
      ) : error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : (
        <div>
          {tips.map((tip, index) => (
            <p key={index} className={styles.tip}>{tip}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tips;
