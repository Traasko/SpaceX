import React, { useEffect, useState } from 'react';
import Call from '../functions/Call';

const EventList = () => {
    const info = Call('https://api.spacexdata.com/v4/history');
    console.log(info)
    if (info[0]) {
        return (
            <div id='evenement'>
                <h1>Evenements</h1>
                <ul>
                    {info.map((info) => (
                        <li key={info.title}>
                            <h2>{info.name}</h2>
                            <p>Date : {info.event_date_utc}</p>
                            <p>{info.details}</p>
                            <a href={info.links.article}>{info.links.article}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default EventList;
