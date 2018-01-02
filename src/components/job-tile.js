import React from 'react';
import { func, number, shape, string } from 'prop-types';

const JobTile = ({client, jobDetails, priority, progress, region, resort, startDate}) => {
    return (
        <div className="job-tile-container">
            <h2>Client: {client}</h2>
            <div>Priority: {priority}</div>
            <div>Progress: {progress}</div>
            <a onClick={() => {resort('region', region)}}>Region: {region}</a>
            <div>Start Date: {startDate.toString()}</div>
        </div>
    );
}

JobTile.propTypes = {
    client: string.isRequired, 
    jobDetails: shape.isRequired,
    priority: number.isRequired,
    progress: string.isRequired,
    region: string.isRequired,
    resort: func.isRequired,
    startDate: string.isRequired
};

export default JobTile;
