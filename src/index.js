import React, { Component } from 'react';
import { array, shape } from 'prop-types';

import FilterDisplay from './components/filter';
import Header from './components/header';
import JobTile from './components/job-tile';
import Sorter from './utils/sorter';

export default class ContractorTree extends Component {
    // activeFilters should be an array of objects that have 2 key value pairs (param: PARAM, value: VALUE),
    // this should be constantly referenced from the state to run the resort() function.
    // the filter component should only manage a list to display, each list object should be clickable with a callback
    // to remove that key/value pair from the array (optimize with constant lookup to remove filters)
    constructor(props) {
        super(props);
        this.state = {
            activeFilters: [],
            backupData: [],
            displayData: [],
            lastSort: 'default' // will be used to reset or sort based on previous sort
        }
    }

    componentDidMount() {
        const sortedJobData = this.setDefaultSortOrder(this.props.jobData);
        this.setState({
            displayData: sortedJobData
        })
    }

    setDefaultSortOrder(data) {      
        let counter = 0;  
        data.map((result) => {
            for (const key in result) {
                if (key === 'sortOrder') {
                    result[key] = counter;
                    counter++;
                }
            }
        });
        this.setState({
            backupData: data
        })
        return data;
    }

    showLoader(dataFound) {
        if (dataFound) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>No Jobs To Display</div>
        );
    }

    resort = (param, value) => {
        // change display data state here after sending new param to resort component
        console.log('Resorting', '\nParameter: ' + param, '\nValue: ' + value);
        if (param === 'reset') {
            const resetData = this.state.backupData;
            this.setState({
                displayData: resetData
            })
        }
        const data = this.state.displayData;
        const newData = Sorter(data, param, value);
        let filterArray = [];
        filterArray.push([param, value]);
        this.setState({
            activeFilters: filterArray,
            displayData: newData
        });
    }

    renderTiles(tileData, searchParams) {
        // send original data array to new component that is in charge of sorting the data according to the param and then 
        // returning a new array that is in order
        let tileArray = [];

        // decide which type of array to fill here, whether it's job tiles or contractor tiles, etc
        tileData.forEach((data, index) => {
            // validate data here, including deep check of job details if needed
            tileArray.push(
                <JobTile 
                    client={data.client}
                    jobDetails={data.jobDetails}
                    key={data.startDate + index}
                    priority={data.priority}
                    progress={data.progress}
                    region={data.region}
                    resort={this.resort}
                    startDate={data.startDate}
                />
            )
        });
        return tileArray;
    }

    render() {
        return (
            <div id="ct-main">
                <Header />
                <FilterDisplay filters={this.state.activeFilters} reset={this.resort}/>
                <div className="ct-view-container">
                        {this.state.displayData.length > 1 ? this.renderTiles(this.state.displayData, 'default') : this.showLoader(false)}
                </div>
           </div>
        );
    }
}

ContractorTree.propTypes = {
    jobData: array.isRequired()
}
