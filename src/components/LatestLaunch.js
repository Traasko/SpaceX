import React, { useState, useEffect } from 'react';

function LatestLaunched() {
    const [lastLaunch, setLastLaunch] = useState(null);
    const [crewMembers, setCrewMembers] = useState([]);
    const [capsules, setCapsules] = useState([]);
    const [payloads, setPayloads] = useState([]);
    const [launchpad, setLaunchpad] = useState(null);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v5/launches/latest')
            .then((response) => response.json())
            .then((data) => {
                setLastLaunch(data);
                fetchCrewMembers(data.crew);
                fetchCapsules(data.capsules);
                fetchPayloads(data.payloads);
                fetchLaunchpad(data.launchpad);
            })
            .catch((error) => {
                console.error('Error fetching latest launch:', error);
            });
    }, []);

    const fetchCrewMembers = (crewIds) => {
        const requests = crewIds.map((crew) => crew.crew);

        Promise.all(
            requests.map((id) =>
                fetch(`https://api.spacexdata.com/v4/crew/${id}`).then(
                    (response) => response.json(),
                ),
            ),
        )
            .then((data) => {
                const crewMembersData = data.map((response) => response);
                setCrewMembers(crewMembersData);
                console.log('members', crewMembersData);
            })
            .catch((error) => {
                console.error('Error fetching crew members:', error);
            });
    };

    const fetchCapsules = (capsuleIds) => {
        const requests = capsuleIds.map((id) =>
            fetch(`https://api.spacexdata.com/v4/capsules/${id}`).then(
                (response) => response.json(),
            ),
        );

        Promise.all(requests)
            .then((data) => {
                setCapsules(data);
                console.log('capsules', data);
            })
            .catch((error) => {
                console.error('Error fetching capsules:', error);
            });
    };

    const fetchPayloads = (payloadIds) => {
        const requests = payloadIds.map((id) =>
            fetch(`https://api.spacexdata.com/v4/payloads/${id}`).then(
                (response) => response.json(),
            ),
        );

        Promise.all(requests)
            .then((data) => {
                setPayloads(data);
                console.log('capsules', data);
            })
            .catch((error) => {
                console.error('Error fetching payloads:', error);
            });
    };

    const fetchLaunchpad = (launchpadId) => {
        fetch(`https://api.spacexdata.com/v4/launchpads/${launchpadId}`).then(
            (response) => response.json(),
        );
        console
            .log('launchpad', launchpadId)
            .then((data) => {
                setLaunchpad(data);
                console.log('setLaunchpad', data);
            })
            .catch((error) => {
                console.error('Error fetching launchpad:', error);
            });
    };

    if (!lastLaunch) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <h1>Dernier lancement</h1>
            <h2>Details</h2>
            <p>Numéro de vol : {lastLaunch.flight_number}</p>
            <p>Nom de la mission : {lastLaunch.name}</p>
            <p>Date : {lastLaunch.date_local}</p>
            <h2>Membres</h2>
            {crewMembers.map((crew) => (
                <ul key={crew.id}>
                    <li>{crew.name}</li>
                </ul>
            ))}

            <h2>Capsules</h2>
            <ul>
                {capsules.map((capsule) => (
                    <li key={capsule.id}>{capsule.serial}</li>
                ))}
            </ul>
            <h2>Payloads :</h2>
            <ul>
                {payloads.map((payload) => (
                    <li key={payload.id}>{payload.name}</li>
                ))}
            </ul>
            <h2>Lancement</h2>
            {launchpad && (
                <div>
                    <p>Nom : {launchpad.name}</p>
                    <p>
                        Lieu : {launchpad.locality}, {launchpad.region}
                    </p>
                </div>
            )}
        </div>
    );
}

export default LatestLaunched;
