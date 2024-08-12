import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import mysql from 'mysql';

const Banner = ({ showBanner }) => {
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'user',
            password: 'password',
            database: 'BannerDB'
        });

        connection.query('SELECT * FROM Banner', (err, results) => {
            if (err) throw err;
            setBannerData(results[0]);
        });

        connection.end();
    }, []);

    if (!showBanner || !bannerData) return null;

    return (
        <div className="banner">
            <p>{bannerData.description}</p>
            <CountdownTimer timestamp={Date.now() + bannerData.timer * 1000} />
            <a href={bannerData.link}>Go to Link</a>
        </div>
    );
};

export default Banner;