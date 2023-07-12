import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RocketDetails = () => {
  const [rocket, setRocket] = useState(null);
  const { rocketId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
        setRocket(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [rocketId]);

  if (!rocket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{rocket.rocket_name}</h1>
      <p>Pays d'origine : {rocket.country}</p>
      <p>Date du premier vol : {rocket.first_flight}</p>
      <p>Entreprise associée : {rocket.company}</p>
      <p>Description : {rocket.description}</p>
      <img src={rocket.flickr_images[0]} alt="Rocket" />
    </div>
  );
};

export default RocketDetails;
