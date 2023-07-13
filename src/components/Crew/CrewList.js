import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Call from '../../functions/Call';
import '../../assets/style/Crew.css';

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
                <div style={{ textAlign: 'center' }}>
                    <h1>Membres</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Rechercher"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="crew-member">
                        <ul>
                            {filteredCrew.map((member) => (
                                <li key={member.id}>
                                    <img
                                        className="card-img-top"
                                        src={member.image}
                                        alt={member.name}
                                        style={{ width: '100px' }}
                                    />
                                    <div>
                                        <h2>
                                            <Link to={`crew/${member.id}`}>
                                                {member.name}
                                            </Link>
                                        </h2>
                                        <p>Agence : {member.agency}</p>
                                        <p>
                                            <a href={member.wikipedia}>
                                                {member.wikipedia}
                                            </a>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default CrewList;
