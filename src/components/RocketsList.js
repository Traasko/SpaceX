// import React, { useEffect, useState } from 'react';
// import Call from '../functions/Call';

// const RocketList = () => {
//     const info = Call('https://api.spacexdata.com/v4/rockets');
//     if(info[0]) {
//         console.log(info)
//         const RocketDisplay = () => {
//             let toDisplay = [];
//             for (let i = 0; i < info.length; i++) {
//                 const element = info[i];
//                 toDisplay[i] = <><p>{element.flickr_images}</p></>
//                 }
//             return toDisplay;
//         }
//     return (
//         <div>
//             <h1>SpaceX - Rockets</h1>
//         <RocketDisplay />
//         </div>
//     );
//         }
    
// };

// export default RocketList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RocketList = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        setRockets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des versions de fusées SpaceX</h1>
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id}>
          <h2>{rocket.rocket_name}</h2>
          <p>Hauteur : {rocket.height.meters} m</p>
          <p>Diamètre : {rocket.diameter.meters} m</p>
          <p>Masse : {rocket.mass.kg} kg</p>
          <img src={rocket.flickr_images[0]} alt="Rocket" />
        </div>
      ))}
    </div>
  );
};

export default RocketList;
