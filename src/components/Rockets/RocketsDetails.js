// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const RocketDetails = () => {
//     const [rocket, setRocket] = useState(null);
//     const { rocketId } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://api.spacexdata.com/v4/rockets/${rocketId}`,
//                 );
//                 setRocket(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchData();
//     }, [rocketId]);

//     if (!rocket) {
//         return <div>Chargement...</div>;
//     }

//     return (
//         <div>
//             <h1>{rocket.rocket_name}</h1>
//             <p>Pays d'origine : {rocket.country}</p>
//             <p>Date du premier vol : {rocket.first_flight}</p>
//             <p>Entreprise associée : {rocket.company}</p>
//             <p>Description : {rocket.description}</p>
//             <img src={rocket.flickr_images[0]} alt="Rocket" />
//         </div>
//     );
// };

// export default RocketDetails;

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function RocketDetails() {
    const [rocket, setRocket] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.spacexdata.com/v4/rockets',
                );

                const filteredRockets = response.data.filter(
                    (rocket) => rocket.id === id,
                );

                if (filteredRockets.length === 0) {
                    setRocket(null);
                } else {
                    setRocket(filteredRockets[0]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    if (rocket === null) {
        return <div>Fusée introuvable</div>;
    }

    document.title = `${rocket.name}`;

    return (
        <div className='section section-rocket'>
            <h2>{rocket.name}</h2>
            <img
                src={rocket.flickr_images[1]}
                className="img-rocket-details"
            ></img>

            <div id="overview">

                <h1>OVERVIEW</h1>

                <table>
                    <tbody>
                        <tr>
                            <td className="td-float-l">Height</td>

                            <td className="td-float-r">
                                {rocket.height.meters} m / {rocket.height.feet}{' '}
                                ft
                            </td>
                        </tr>

                        <tr>
                            <td className="td-float-l">Mass</td>

                            <td className="td-float-r">
                                {rocket.mass.kg} kg / {rocket.mass.lb} lb
                            </td>
                        </tr>

                        <tr>
                            <td className="td-float-l">Diameter</td>

                            <td className="td-float-r">
                                {rocket.diameter.meters} m /{' '}
                                {rocket.diameter.feet} ft
                            </td>
                        </tr>

                        <tr>
                            <td className="td-float-l">Company</td>

                            <td className="td-float-r">{rocket.company}</td>
                        </tr>

                        <tr>
                            <td className="td-float-l">First Flight</td>

                            <td className="td-float-r">
                                {rocket.first_flight}
                            </td>
                        </tr>
                        <tr>
                            <td className="td-float-l">Stage</td>

                            <td className="td-float-r">{rocket.stages}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id="description">
                <h1 id="title-description">DESCRIPTION</h1>

                <p id="p-description">{rocket.description}</p>
            </div>
        </div>
    );
}

export default RocketDetails;
