import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Roadster = () => {
    const [roadsterInfo, setRoadsterInfo] = useState(null);

    useEffect(() => {
        const fetchRoadsterInfo = async () => {
            try {
                const response = await axios.get(
                    'https://api.spacexdata.com/v4/roadster',
                );
                setRoadsterInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRoadsterInfo();
    }, []);

    if (!roadsterInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="section">
            <h1>Roadster d'Elon Musk</h1>
            <p>Coordonnées actuelles de position : </p>
            <img src={roadsterInfo.flickr_images} />
            <p>Vitesse : {roadsterInfo.speed_kph} km/h</p>
            <p>
                Distance par rapport à la Terre :{' '}
                {roadsterInfo.earth_distance_km} km
            </p>
        </div>
    );
};

export default Roadster;
