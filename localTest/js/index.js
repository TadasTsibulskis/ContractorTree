import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from '../less/main.less';

import { jobList } from '../../localData/jobList';
import ContractorTree from '../../src/index';

export default class ContractorTreeServer extends Component {
    constructor() {
        super();
        this.state = {
            jobsToDisplay: jobList
        };
    }
    render() {
        return (
            <ContractorTree 
                jobData={this.state.jobsToDisplay}
            /> 
        );
    }
}

ReactDOM.render(
    <ContractorTreeServer />,
    document.getElementById('root')
);
