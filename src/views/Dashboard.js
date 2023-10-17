import React from 'react';
import { useParams } from 'react-router-dom';

function Dashboard() {
    let parms = useParams();
    return (
        <div>
                Dashboard - {parms.paperId} {parms.qKey} {parms.token}
        </div>
    );
}

export default Dashboard;
