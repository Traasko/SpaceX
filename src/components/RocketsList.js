// import React, { useEffect, useState } from 'react';
// import Call from '../functions/Call';

// const RocketList = () => {
//   const [rockets, setRockets] = useState([]);
//   const [events, setEvents] = useState(null);

//     const arrayRockets = Call("https://api.spacexdata.com/v4/rockets");
//     console.log(arrayRockets)
//     const handleRocketClick = (rocket) => {
//     setEvents(rocket);
//   };
//   if(arrayRockets[0]) {

//       return (
//           <div>
//       <h1>SpaceX - Fusées</h1>
//       <ul>
//         {arrayRockets.map(rocket => (
//             <li key={rocket.id} onClick={() => handleRocketClick(rocket)}>
//             {rocket.name}
//           </li>
//         ))}
//       </ul>

//       {events && (
//           <div>
//           <h2>{events.name}</h2>
//           <p>Taille : {events.height.meters} mètres</p>
//           <p>Diamètre : {events.diameter.meters} mètres</p>
//           <p>Poids : {events.mass.kg} kg</p>
//           {/* <p>Country: {selectedRocket.country}</p>
//           <p>First Flight: {selectedRocket.first_flight}</p>
//           <p>Company: {selectedRocket.company}</p>
//           <p>Description: {selectedRocket.description}</p>
//           {selectedRocket.flickr_images.map((image, index) => (
//               <img key={index} src={image} alt={selectedRocket.rocket_name} />
//             ))} */}
//         </div>
//       )}
//     </div>
//   );
// }
// };

// export default RocketList;

import React, { useEffect, useState } from 'react';
import Call from '../functions/Call';

const RocketList = () => {
    const info = Call('https://api.spacexdata.com/v4/rockets');
    if(info[0]) {
    return (
        <div>
            <h1>SpaceX - Rockets</h1>
            <p>{info[0].flickr_images}</p>
            {/* <p>Description : {info.summary}</p>
            <p>Création: {info.founded}</p>
            <p>PDG : {info.ceo}</p>
            <p>
                Siège social : {info.headquarters?.address},{' '}
                {info.headquarters?.city}, {info.headquarters?.state}
            </p>
            <p>Nb employées : {info.employees}</p>
            <p>
                Site : <a href={info.links?.website}>{info.links?.website}</a>
            </p> */}
        </div>
    );
        }
    
};

export default RocketList;
