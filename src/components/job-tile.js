import React from 'react';
import { func, number, shape, string } from 'prop-types';

const JobTile = ({client, jobDetails, priority, progress, region, setFilter, startDate}) => {
    return (
        <div className="job-tile-container">
            <h2>Client: {client}</h2>
            <a onClick={() => {setFilter('add', 'priority', priority)}}>priority: {priority}</a>
            <div>Progress: {progress}</div>
            <a onClick={() => {setFilter('add', 'region', region)}}>Region: {region}</a>
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
    setFilter: func.isRequired,
    startDate: string.isRequired
};

export default JobTile;
