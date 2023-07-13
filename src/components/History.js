import React, { useEffect, useState } from 'react';
import Call from '../functions/Call';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const info = Call('https://api.spacexdata.com/v4/history');
    if (info[0]) {
        return (
            <div>
                <h1>Evenements SpaceX</h1>
                <ul>
                    {info.map((info) => (
                        <li key={info.id}>
                            <h2>{info.title}</h2>
                            <p>Date : {info.event_date_utc}</p>
                            <p>{info.details}</p>
                            <a href={info.links.article}></a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default EventList;
