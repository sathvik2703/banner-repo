import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
    const [bannerData, setBannerData] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/banner');
            setBannerData(response.data);
            setTimeLeft(response.data.timer);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    if (!bannerData.isVisible || timeLeft <= 0) return null;

    return (
        <div className="banner">
            <p>{bannerData.description}</p>
            <a href={bannerData.link} target="_blank" rel="noopener noreferrer">Click here to reset timer</a>
            <a href={"/dashboard"}> go to dashboard </a>
            <div className="timer">Time left: {timeLeft}s</div>
        </div>
    );
};

export default Banner;
