import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tips.css'; // Import CSS module for component-specific styling

const Tips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTips = async () => {
    try {
      setLoading(true); // Show loading indicator while fetching new tips
      const response = await axios.post('https://greenthumb-kmir.onrender.com/api/get-completion', {
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

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div className="tipsContainer">
      <h1 className="title">Gardening Tips</h1>
      <button onClick={fetchTips} className="refreshButton">Refresh Tips</button>
      {loading ? (
        <p className="loadingMessage">Loading tips...</p>
      ) : error ? (
        <p className="errorMessage">{error}</p>
      ) : (
        <div>
          {tips.map((tip, index) => (
            <p key={index} className="tip">{tip}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tips;
