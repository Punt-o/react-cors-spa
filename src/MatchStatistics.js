import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    InstapaperShareButton,
    InstapaperIcon,
} from 'react-share';
import './MatchStatistics.css';
import logo from './LOGO_PUNTO.png';

const MatchStatistics = () => {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        const fetchStatisticsFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            const stats = [
                {
                    name: 'Total Scored Points',
                    team1: parseInt(params.get('team1TotalScoredPoints'), 10),
                    team2: parseInt(params.get('team2TotalScoredPoints'), 10)
                },
                {
                    name: 'Consecutive Points',
                    team1: parseInt(params.get('team1ConsecutivePoints'), 10),
                    team2: parseInt(params.get('team2ConsecutivePoints'), 10)
                },
                {
                    name: 'Percent Scored Point',
                    team1: parseFloat(params.get('team1PercentScoredPoint')),
                    team2: parseFloat(params.get('team2PercentScoredPoint'))
                },
                {
                    name: 'Decisive Points',
                    team1: parseInt(params.get('team1DecisivePoints'), 10),
                    team2: parseInt(params.get('team2DecisivePoints'), 10)
                }
            ];
            setStatistics(stats);
        };

        fetchStatisticsFromUrl();
    }, []);

    const handleShare = (platform) => {
        html2canvas(document.querySelector("#statsContainer")).then(canvas => {
            const image = canvas.toDataURL("image/png");

            if (platform === 'facebook') {
                const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}`;
                window.open(url, '_blank');
            } else if (platform === 'instagram') {
                const url = `https://www.instagram.com/?url=${encodeURIComponent(image)}`;
                window.open(url, '_blank');
            } else if (platform === 'whatsapp') {
                const url = `https://wa.me/?text=${encodeURIComponent(image)}`;
                window.open(url, '_blank');
            }
        });
    };

    return (
        <div className="container" id="statsContainer">
            <img src={logo} alt="Logo" className="logo" />
            <table className="stats-table">
                <thead>
                <tr>
                    <th>Team 1</th>
                    <th>Statistic</th>
                    <th>Team 2</th>
                </tr>
                </thead>
                <tbody>
                {statistics.map((stat, index) => (
                    <tr key={index}>
                        <td>{stat.team1}</td>
                        <td>{stat.name}</td>
                        <td>{stat.team2}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="social-share">
                <button onClick={() => handleShare('facebook')} className="share-button facebook">
                    Share on Facebook
                </button>
                <button onClick={() => handleShare('whatsapp')} className="share-button whatsapp">
                    Share on WhatsApp
                </button>
                <button onClick={() => handleShare('instagram')} className="share-button instagram">
                    Share on Instagram
                </button>
            </div>
        </div>
    );
};

export default MatchStatistics;
