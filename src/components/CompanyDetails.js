import React, { useEffect, useState } from 'react';
import Call from '../functions/Call';

const SpaceXInfo = () => {
    const [info, setInfo] = useState({});
    const company = Call('https://api.spacexdata.com/v4/company');
    if (company) {
        return (
            <div className="section">
                <div>
                    <h1>Informations SpaceX</h1>
                    <h2>Nom : {company.name}</h2>
                    <p>Description : {company.summary}</p>
                    <p>Création: {company.founded}</p>
                    <p>PDG : {company.ceo}</p>
                    <p>
                        Siège social : {company.headquarters?.address},{' '}
                        {company.headquarters?.city},{' '}
                        {company.headquarters?.state}
                    </p>
                    <p>Nb employées : {company.employees}</p>
                    <p>
                        Site :{' '}
                        <a href={company.links?.website}>
                            {company.links?.website}
                        </a>
                    </p>
                </div>
            </div>
        );
    }
};

export default SpaceXInfo;
