import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [description, setDescription] = useState('');
    const [timer, setTimer] = useState(60);
    const [link, setLink] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/banner');
            setDescription(response.data.description);
            setTimer(response.data.timer);
            setLink(response.data.link);
            setIsVisible(response.data.isVisible);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/banner/update', {
            description,
            timer,
            link,
            isVisible
        });
        alert('Banner updated successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Timer (seconds):</label>
                <input
                    type="number"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                />
            </div>
            <div>
                <label>Link:</label>
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>
            <div>
                <label>Visibility:</label>
                <input
                    type="checkbox"
                    checked={isVisible}
                    onChange={(e) => setIsVisible(e.target.checked)}
                />
            </div>
            <button type="submit">Update Banner</button>
        </form>
    );
};

export default Dashboard;
