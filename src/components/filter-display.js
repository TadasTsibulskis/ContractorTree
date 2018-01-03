import React, { Component } from 'react';
import { arrayOf, func } from 'prop-types';

import FilterTag from './filter-tag';

const renderFilterTags = (filters, removeFilter) => {
    let tagArray = [];
    console.log(removeFilter);
    filters.forEach((ele) => {
        tagArray.push(<FilterTag param={ele.param} removeFilter={removeFilter} value={ele.value} />);
    });
    return tagArray;
}
const FilterDisplay = ({filters, removeFilter}) => {
    return (
        <div className="ct-filters">
            {renderFilterTags(filters, removeFilter)}
        </div>
    );
}

FilterDisplay.propTypes = {
    filters: arrayOf({}).isRequired,
    setFilter: func.isRequired
};

export default FilterDisplay;
