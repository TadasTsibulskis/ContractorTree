import React, { Component } from 'react';
import { array, shape } from 'prop-types';

import CONSTANTS from './utils/constants';
import FilterDisplay from './components/filter-display';
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
            displayData: sortedJobData,
            setFilter: this.setFilter
        });
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

    setFilter = (type, param, value) => {
        let filterArray = this.state.activeFilters;

        switch (type) {
            case 'add' :
            console.log('add', param, value);
            filterArray.push({'param': param, 'value': value});
            this.setState({
                activeFilters: filterArray
            });
            break;

            case 'remove' : 
            console.log('remove', param, value);
            const arrayIndex = filterArray.findIndex(d => d.value === value);
            const newFilterArray = filterArray.slice(arrayIndex, arrayIndex);
            this.setState({
                activeFilters: newFilterArray
            });
            break;

            default : 
            break;
        }        
    }

    renderTiles(tileData, filters) {
        let tileArray = [];
        const newData = Sorter(tileData, filters);
        newData.forEach((data, index) => {
            tileArray.push(
                <JobTile 
                    client={data.client}
                    jobDetails={data.jobDetails}
                    key={data.startDate + index}
                    priority={data.priority}
                    progress={data.progress}
                    region={data.region}
                    setFilter={this.setFilter}
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
                {/*when filterDisplay is created, it does not get the function passed correctly*/}
                <FilterDisplay filters={this.state.activeFilters} removeFilter={this.state.setFilter}/>
                <div className="ct-view-container">
                        {this.state.displayData.length > 1 ? this.renderTiles(this.state.displayData, this.state.activeFilters) : this.showLoader(false)}
                </div>
           </div>
        );
    }
}

ContractorTree.propTypes = {
    jobData: array.isRequired()
}
