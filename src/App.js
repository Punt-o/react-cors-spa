import React from 'react';
import './App.css';
import MatchStatistics from './MatchStatistics';
import { useFetch } from "react-async"

// To be replaced by the endpoint of the API deployed through the CloudFormation Template
const APIEndPoint = 'to be replaced with your api endpoint here'

function App() {
    // const apiUrl = 'http://localhost:8000/padel_match_statistics.json'; // URL locale del file JSON

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    {APIEndPoint.startsWith('http') &&*/}
            {/*        <APIResult />*/}
            {/*    }*/}
            {/*</header>*/}
            <MatchStatistics />
            {/*<MatchStatistics apiUrl={apiUrl} />*/}
        </div>
    );
}

const APIResult = () => {
    const { data, error } = useFetch(APIEndPoint, {
        headers: { accept: "application/json" },
    })
    if (error) return <p>{error.message}</p>
    if (data) return <p>{data.message}</p>
    return null
}

export default App;
