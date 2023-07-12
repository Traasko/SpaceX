import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Call from '../functions/Call';

const CrewList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const crew = Call('https://api.spacexdata.com/v4/crew');
    if (crew[0]) {
        const filteredCrew = crew.filter((member) => {
            return (
                member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.agency.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

        return (
            <div>
                <h1>Membres de l'équipage Dragon</h1>
                <input
                    type="text"
                    placeholder="Rechercher par agence ou par nom de membres"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul>
                    {filteredCrew.map((member) => (
                        <li key={member.id}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{ width: '100px' }}
                            />
                            <h2>
                                <Link to={`/${member.id}`}>{member.name}</Link>
                            </h2>
                            <p>Agence : {member.agency}</p>
                            <p>
                                Wikipedia :{' '}
                                <a href={member.wikipedia}>
                                    {member.wikipedia}
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default CrewList;
