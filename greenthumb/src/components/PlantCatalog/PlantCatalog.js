import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlantCatalog.css';

const PlantCatalog = () => {
    const [plants, setPlants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://greenthumb-kmir.onrender.com/api/plants')
            .then(response => {
                setPlants(response.data.data);
            })
            .catch(error => {
                setError('Error fetching plant data');
                console.error('Error fetching plant data:', error);
            });
    }, []);

    return (
        <div className="plant-catalog">
            <h1>Plant Catalog</h1>
            {error && <p className="error">{error}</p>}
            <ul>
                {plants.length > 0 ? (
                    plants.map(plant => (
                        <li key={plant.id} className="plant-item">
                            {plant.default_image && 
                                <img 
                                    src={plant.default_image.medium_url} 
                                    alt={plant.scientific_name.join(', ')} 
                                    className="plant-image" 
                                />
                            }
                            <div className="plant-details">
                                <h2>{plant.common_name || plant.scientific_name.join(', ')}</h2>
                                <p><strong>Scientific Name:</strong> {plant.scientific_name.join(', ')}</p>
                                {plant.other_name && <p><strong>Other Name:</strong> {plant.other_name.join(', ')}</p>}
                                <p><strong>Cycle:</strong> {plant.cycle}</p>
                                <p><strong>Watering:</strong> {plant.watering}</p>
                                {plant.sunlight.length > 0 && <p><strong>Sunlight:</strong> {plant.sunlight.join(', ')}</p>}
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No plants found</li>
                )}
            </ul>
        </div>
    );
};

export default PlantCatalog;
