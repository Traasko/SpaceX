import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Call(target) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(target);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    return data;
}

export default Call;
