import React from 'react';
import './App.css';
import MatchStatistics from './MatchStatistics';

function App() {
    const apiUrl = 'http://localhost:8000/padel_match_statistics.json'; // URL locale del file JSON

    return (
        <div className="App">
            <MatchStatistics apiUrl={apiUrl} />
        </div>
    );
}

export default App;
